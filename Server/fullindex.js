const express = require('express')                                                  //------------------ define objects
const app = express()
const path = require('path')
const WebSocket = require('ws')
const http = require('http');
const format = require('express-device')
const connections = require('./library/connections')
const functions = require('./library/objectFunctions')
const users = connections.users
const udp = connections.consoles
const server = http.createServer(app)
const wss = new WebSocket.Server({ server, clientTracking: true })
const sendWS = functions.sendWS

process.on('warning', e => console.warn(e.stack))                                   //------------------ Troubleshooting event overflow

app.set('port', process.env.PORT || connections.server.port)                        //------------------ Express Settings
app.set('views', path.join( __dirname, '/views') )
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(format.capture())

connected = Object.assign({total: 0})                                               //------------------ local "Database" objects
history = Object.assign({})

udp.Ragan.udpport.on("ready", function () {                                         //------------------ open OSC incoming Port
    var port = connections.server.port
    functions.logger('Listening for OSC on port ' + port);
});

udp.Ragan.udpport.on("message",(oscMessage,u,info)=>{forwardOSC(oscMessage, info,connected)}); 

wss.on('connection',function connection(ws, request) {                              //------------------  Client connects to WebSocket
    var index = functions.findIndex(request.connection.remoteAddress)                   //Link Websocket to HTTP Index
    //connected[index].ws = ws
                 //Send Client the Lighting Boards the server can connect to
    if (connected[index].hasOwnProperty("ID")) {                                        //-- Check if Client is remembered  
        connected[index].ws.send(JSON.stringify({index: index, channel: 'update', data: udp})) 
        sendWS(connected[index].ws, index, 'connection', connected[index])
    }else{                                                                                          
        sendWS(connected[index].ws,index,'connection','login')                                              //Send Client Login Request
    }
    
//------------------ WebSocket Message Recieved
        ws.on('message',function incoming(message) {
            message = JSON.parse(message)                                                               //Parse incoming ws messages into an object
            switch(message.channel) {
    //-------------- Client upgrades connection or disconnects
                case "connection":
                    if (message.data in users) {
                        functions.signIn(message,ws, history, connected, users, udp)
                    } else if (message.data == "disconnect"){
                        connected = functions.disconnect(message,connected)
                    } else {
                        noUser(message, ws, connected)
                    }
                    break
    //-------------- User changes device being controlled                
                case "device":   
                    history[connected[message.index].IP].Device = message.data
                    functions.logger(connected[message.index].IP + ' (' + connected[message.index].Name + ') switched to ' + message.data,udp)
                    functions.resetDevice(message,udp)
                    break
    //-------------- Forward Message to Ragan board
                case  udp.Ragan.ipaddress:
                    udp.Ragan.udpport.send(message.data)
                    break
    //-------------- Forward Message to Ballroom board
                case "Ballroom":
                    console.log("ballroom: " + message.data)
                    udp.Ballroom.udpport.send(message.data)
                    break
                case "encoder" :
                    console.log('encoder: ', message)
                    break
                default:
                    console.log('unknown: ',message)
                    break
            }
            
        })
        ws.on("close",function(){

        })
    });

//------------------ Start HTML Server
    server.listen(connections.server.port,connections.server.ip, function () {
        functions.logger('Server started @ ' + server.address().address +':' + server.address().port);
    });

//------------------ HTML Routing
    app.get('/*', function (req, res) {
        var found = false
        var device = req.url.charAt(1).toUpperCase()+req.url.slice(2)
        for (i=1; i<= connected.total;i++){
            if (connected[i].IP == req.ip) {
                index = i
                found = true
                    res.sendFile('views/index-desktop.html', {root: __dirname })
            }
        }
        if (found == false) {
            connected.total += 1
            for (i = 1;;){
                if (connected.hasOwnProperty(i)) {
                    i += 1
                    continue
                }else{
                    index = i
                    break
                }
            }
            if (history.hasOwnProperty(req.ip)){
                Object.assign(connected, { [index] : {Name: history[req.ip].Name, IP: req.ip, Format: req.device.type, ID: history[req.ip].ID}})
                res.sendFile('views/index-desktop.html', {root: __dirname })
                    var page = req.url.charAt(1).toUpperCase()+req.url.slice(2).toLowerCase()
                    if (connections.consoles.hasOwnProperty(page)) {
                        console.log(page)
                        connected[index].Device = page
                    } else {
                        connected[index].Device = history[req.ip].Device
                    }
                    functions.logger(req.ip + ' (' + history[req.ip].Name +'-' + req.device.type +') reconnected controlling ' + connected[index].Device)
            } else {
                Object.assign(connected, { [index] : {IP: req.ip, Format: req.device.type}})
                res.sendFile('views/index-desktop.html', {root: __dirname })
                functions.logger(req.ip + ' (' + index +'-' + req.device.type +') connected')
            }
        }
    })

//------------------ Open OSC outgoing ports
    for (location in udp) {
        udp[location].udpport.open();
    }

    function noUser(message, ws, connected) {
        ws.send(JSON.stringify( { index: message.index, channel: "connection", data: 'fail'}))
        functions.logger(connected[message.index].IP + ' (' + message.index +'-' + connected[message.index].Format + ') ' +message.data + ' Denied Access')
    }

    function forwardOSC(oscMessage, info, connected){
        if (oscMessage.address.search('user') > -1) {
            Object.assign(oscMessage, {console: info.address, channel:"osc"})
            Object.keys(connected).forEach(function(client){
                if(connected[client].hasOwnProperty("ws")){
                    oscMessage.console = functions.findDevice(oscMessage.console,udp)
                    connected[client].ws.send(JSON.stringify(oscMessage))
                }
            })
        }
    }

    

    