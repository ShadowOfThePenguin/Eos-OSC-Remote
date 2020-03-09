const express = require('express')
const app = express()
const path = require('path')
const WebSocket = require('ws')
const wss = new WebSocket.Server({ port:8001})
const connections = require('./library/connections')
const users = connections.users
var osc = require("osc");
var connected = {}
var remember = {}

process.on('warning', e => console.warn(e.stack))

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())

var consoles = {
    Ragan: {
        udpport: ""
        , ipaddress: "161.28.192.208"
        , port: 8001
    },
    Ballroom: {
        port: 8002, 
        udpport: "", 
        ipaddress: "161.28.194.226"
    }, 
    CenterStage: {
        port:8003, 
        udpport: "161.28.194.226", 
        ipaddress:"unknown"
    }
}

var getLocation=function (ipaddress) {
    var answer = ""
    Object.keys(consoles).forEach(location => {
        if(consoles[location].ipaddress == ipaddress) {
            answer = location
        }
    })
    return answer
}

for (var location in consoles) {
    consoles[location].udpport = new osc.UDPPort({
        localAddress: connections.server.ip,
        localPort: consoles[location].port,
        remotePort: consoles[location].port,
        remoteAddress: consoles[location].ipaddress
    });
    consoles[location].udpport.open()
}

logger(consoles)

for (location in consoles) {
    consoles[location].udpport.on("ready", function (){console.log('       OSC Connected w/ ' + getLocation(this.options.remoteAddress) + ' on port ' + this.options.remotePort)}  )                                       //------------------ open OSC incoming Port
}

        wss.on('listening', function(){
            console.log('    WebSocket Server Running @ ' + connections.server.ip + ':' + connections.server.port)
        })

        wss.on('connection',function connection(ws, request) {
            ws.send(JSON.stringify({channel: "update", boards: Object.keys(consoles)}))
            if (request.connection.remoteAddress in remember) {
                var ID = remember[request.connection.remoteAddress].ID
                ws.send(JSON.stringify({channel: "userID", data: ID}))
                ws.send(JSON.stringify({channel: "userName", data: {firstname: users[ID].first, lastname: users[ID].last}}))
                ws.send(JSON.stringify({channel: "route", data: "console"}))
                ws.send(JSON.stringify({channel: "board", data: remember[request.connection.remoteAddress].board}))
                //consoles[remember[request.connection.remoteAddress].board].udpport.send({address: "/eos/reset", args: {type: 'f', value: '1'}})
                logger(users[ID].first + ' ' +users[ID].last + ' has reconnected')
            } else {
                ws.send(JSON.stringify({channel: "route", data: "logIn"}))
            }
            consoles.Ragan.udpport.on("message", function (message) {                                         //------------------ open OSC incoming Port
                console.log('message recieved:', message)
                ws.send(JSON.stringify({channel: "Ragan", address: message.address, args: message.args}))

            })
            consoles.Ballroom.udpport.on("message", function (message) {                                         //------------------ open OSC incoming Port
                console.log('message recieved:', message)
                ws.send(JSON.stringify({channel: "Ballroom", address: message.address, args: message.args}))

            })
            ws.on('message',function incoming(message) {
                
                    message = JSON.parse(message)
                    switch(message.channel) {
                        case "login":
                            if (message.user in users) {
                                if (message.remember) {Object.assign(remember, {[ws._socket.remoteAddress]: {ID: message.user, board: message.board}})}
                                var userName = users[message.user].first + ' ' + users[message.user].last
                                Object.assign(connected,{[ws._socket.remoteAddress]: {board: message.board, user: userName}})
                                ws.send(JSON.stringify({channel: "userName", data: {firstname: users[message.user].first, lastname: users[message.user].last}}))
                                ws.send(JSON.stringify({channel: "userID", data: message.user}))
                                ws.send(JSON.stringify({channel: "board", data: message.board}))
                                ws.send(JSON.stringify({channel: "userNumber", data: '1'}))
                                ws.send(JSON.stringify({channel: "route", data: "console"}))
                                //consoles[message.board].udpport.send({address: "/eos/reset", args: {type: 'f', value: '1'}})
                                logger(users[message.user].first + ' ' +users[message.user].last + ' has signed in controlling ' + message.board)
                            }
                            break
                        case "Ballroom":
                            consoles.Ballroom.udpport.send({address: message.address, args: message.args})
                            break
                        case "Ragan":
                                consoles.Ragan.udpport.send({address: message.address, args: message.args})
                            break
                        case "Console":
                            remember[ws._socket.remoteAddress].board=message.board
                            break
                        case "logout":
                            delete remember[ws._socket.remoteAddress]
                            ws.send(JSON.stringify({channel: "route", data: "logIn"}))
                            break
                        default:
                            console.log('error - unrecognized message:',message)
                    }
                })
                ws.on("close",function(){
                    var ip = ws._socket.remoteAddress
                    if(typeof connected[ip] != 'undefined'){
                    logger(connected[ip].user + ' has disconnected')
                    delete connected[ip]
                    }
                })
            });


    function logger(msg){
        var currentTime = new Intl.DateTimeFormat('en-US', {hour12:false,weekday: "short",day: 'numeric', month:"short",year:"numeric", hour:"2-digit",minute:'2-digit', second:"2-digit"}).formatToParts(new Date())
        var date = {}
        for (item in currentTime) {
            date[currentTime[item].type]=currentTime[item].value
        }
        console.log(date.weekday + ', ' + date.day + ' ' + date.month + ' ' + date.hour + ':' + date.minute + ':' + date.second + ' MST: ' + msg)
    }
