const hostname = 'ws://' + location.hostname + ':' + location.port
const send = document.getElementById('signin');
const text = document.getElementById('textBox');
const ws = new WebSocket(hostname)

var ID = ""
var Index = ""
var Device = ""

ws.onopen = function () {
    console.log('websocket is connected to ' + hostname)
    window.history.pushState('eos remote', "eos remote", 'http://161.28.194.100:8001/')
}   

ws.onmessage = function(message) {
    console.log(message)
    message = message.data
    var obj = JSON.parse(message)
    if (obj.hasOwnProperty("index")){Index = obj.index}
    switch(obj.channel) {
        case 'connection':
            switch(obj.data) {
                case 'login':
                    break
                case 'fail':
                    text.value = null
                    break
                default:
                    location.reload(true);
                    break 
            }
            break
    }   
}

text.addEventListener('keyup',function(e){
    if (e.keyCode==13){
        send.click();
    }
})
send.addEventListener('click', function() {
    ws.send(JSON.stringify({ index: Index, channel: "connection" , data: text.value}));
});

