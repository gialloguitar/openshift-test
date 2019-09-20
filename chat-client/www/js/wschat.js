var d = new Date();
//var timestamp = d.toDateString();
var timestamp = d.toLocaleString()

window.onload = function() {

var tick = 0;
var Wall = document.getElementById('wall');
var form  = document.forms[0];

function CreateWS() {
socket = new WebSocket('ws://192.168.99.101:8889');
socket.onopen = function() {
  document.getElementById('status').innerHTML = 'On the Wall';
};

socket.onclose = function(event) {
  if (event.wasClean) {
    document.getElementById('status').innerHTML = 'Close is clear';
  } else {
    document.getElementById('status').innerHTML = 'Disconnect<br>';
  }
  document.getElementById('status').innerHTML += 'Code: ' + event.code + ' reason: ' + event.reason;
};

socket.onmessage = function(event) {

    var message = JSON.parse(event.data);
    if (!isBlank(message)) {
    MessageBlock(message);    
    Wall.scrollTop = Wall.scrollHeight;
    };
};

socket.onerror = function(error) {
  document.getElementById('status').innerHTML = 'Error';
  CreateWS();
};

};

CreateWS();

form.onsubmit = function() {

      ++tick;

      var message = '<pre>' + this.message.value + '</pre>';
      socket.send(JSON.stringify(message));
      form.textarea.value= '';

return false;
};

function MessageBlock(msg) {
var divMsg = document.createElement("div");
divMsg.className = 'messages';   
divMsg.innerHTML = timestamp + ': ' + '<div class="messages-text">' + msg + '</div>';                   
Wall.appendChild(divMsg); 
};

function isBlank(str) {
    return (!str || /<pre>\s*<\/pre>/.test(str));
};

}; 
