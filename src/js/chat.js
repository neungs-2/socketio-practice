'use strict';
const socket = io();

// param: channel명, contents
socket.emit('chatting', 'from front');
socket.on('chatting', (data) => {
  console.log(data);
});
console.log(socket);
