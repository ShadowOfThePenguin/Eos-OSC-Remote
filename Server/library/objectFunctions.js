var findDevice = function (deviceip, udp) {
    for (const board in udp) {
        if (udp[board].ipaddress == deviceip) {
            return board
        }
    }
}

var findIndex =function(ipaddress){
    for (var i = 1; i <= connected.total; i++) {
        if (ipaddress == connected[i].IP) {
            return i
        }
    }
}

const signIn = function(message,ws, history, connected, users, udp) {
    update(connected[message.index],{Name: users[message.data], Format: connected[message.index].Format, ID: message.data, webSocket: connected[message.index].webSocket})
    Object.assign(history, {[connected[message.index].IP] : {Name: users[message.data], ID: message.data, Device: 'Ragan' }})
    ws.send(JSON.stringify({index: index, channel: 'update', data: udp}))  
    ws.send(JSON.stringify({index: message.index, channel: "connection", data: connected[message.index]}))
    
    logger(connected[message.index].IP + ' (' + message.index + '-' + connected[message.index].Format +') ' + users[message.data].first +' '+ users[message.data].last + ' signed in controlling ' + history[connected[message.index].IP].Device)
}

const update = function(object, data) {
    for (key in data) {
        object[key] = data[key]
    }
}

function sendWS(ws, index, channel, data) {
    ws.send(JSON.stringify({index: index, channel: channel, data: data}))
}

function disconnect(message, connected) {
    logger(connected[message.index].IP + ' (' + connected[message.index].Name + ') disconnected')
    delete connected[message.index]
    connected.total -= 1
    if (connected.total < 0 ) {connected.total = 0}
    return connected
}

function logger(msg){
    var currentTime = new Intl.DateTimeFormat('en-US', {hour12:false,weekday: "short",day: 'numeric', month:"short",year:"numeric", hour:"2-digit",minute:'2-digit', second:"2-digit"}).formatToParts(new Date())
    var date = {}
    for (item in currentTime) {
        date[currentTime[item].type]=currentTime[item].value
    }
    console.log(date.weekday + ', ' + date.day + ' ' + date.month + ' ' + date.year + ' ' + date.hour + ':' + date.minute + ':' + date.second + ' MST: ' + msg)
}

const resetDevice = function(message,udp) {
    udp[message.data].udpport.send({
        address: "/eos/reset",
        args: [
            {
                type: "f",
                    value: 1
            }
        ]
    })
}


module.exports = {findDevice, findIndex, signIn, disconnect,update, resetDevice,sendWS, logger}