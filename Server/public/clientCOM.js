const hostname = location.hostname + ':' + location.port
const ws = new WebSocket('ws://' + hostname)
const button = interact('#Controls').on('tap',function(event){console.log(event);panelbutton(event.target.id)})
var ClientInfo
var Index = ""
var Device = ""
var connections =[]

ws.onopen = function () {
    console.log('websocket is connected to ' + hostname)
    window.history.pushState('eos remote', "eos remote", 'http://' + hostname)
}   

ws.onmessage = function(message) {
    message = message.data
    var obj = JSON.parse(message)
    if (obj.hasOwnProperty("index") && Index ==""){Index = obj.index;console.log(Index)}
    switch(obj.channel) {
        case 'update' :
            //createOptions(obj.data)
            var i = 0 
            for (item in obj.data) {
                connections[i] = [item]
                i++
            }
            break
        case 'connection':
            switch(obj.data) {
                case 'login':
                    ws.send(JSON.stringify({ index: Index, channel: "connection" , data: "10581549"})); 
                    break
                case 'fail':
                    break
                default:
                    if (obj.data.hasOwnProperty("Device")) {
                                Device = obj.data.Device
                                if (typeof(Selected) != "undefined"){Selected.attr({text: board})}
                    }else{
                        window.alert("please select a board")
                        Device = "Ragan"
                    }
                    ClientInfo = obj.data
                    console.log(ClientInfo)
                    break 
            }
            break
        case "osc":
                if (Selected.attr("text") == obj.console){
                    obj.address=obj.address.replace("/eos/out/user/","")
                    var address = obj.address.split('/')
                    if (address[0] == Index+1) {
                        switch(address[1]) {
                            case "cmd":
                                var cmd = JSON.stringify(obj.args)
                                cmd = cmd.substring(2,cmd.length-4)
                                commandLine[1].attr({text:cmd})
                            //case "":
                        }

                    }
                    
                
            }
            break
            //commandLine.innerHTML=JSON.stringify(obj.args)
        default:
            console.log(obj)
            break
    }   
}

window.addEventListener('beforeunload', function () {
    disconnect()
});

window.addEventListener('onunload', function () {
    disconnect()
});

power.addEventListener('click', function(){
    sendOSC({
        address: '/eos/key/shift',
        args: [{type: 'f', value : 1}]
    })
    sendOSC({
        address: '/eos/key/escape',
        args: [{type: 'f', value : 1}]
        })
    sendOSC({
        address: '/eos/key/escape',
        args: [{type: 'f', value : 0}]
    });
    sendOSC({
        address: '/eos/key/shift',
        args: [{type: 'f', value : 0}]
    })
    console.log("message sent")
})

function panelbutton(key){
    console.log(key)
    var address = '/eos/user/'
    var user = Index+1
    address += user
    address += '/key/'
    address += key
    sendOSC({
        address: address, 
        args: [{type: 'f', value : 1}]
        });
}

function sendOSC(data){
    ws.send(JSON.stringify({index: Index, channel: Device, data:data}))
}


  function disconnect(){
    ws.send(JSON.stringify({index: Index, channel: 'connection', data:'disconnect'}));
  }

  function updateDevice(deviceName) {
    Device = deviceName
    ws.send(JSON.stringify({index: Index, channel: "device" , data: Device}))
  }