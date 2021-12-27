const express = require('express');
const path = require('path');
const http = require('http'); //Websocket은 http를 통해 사용해야 함
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app); //express가 http를 통해 실행되도록
const io = socketIO(server);
const PORT = process.env.PORT || 5000;

// express.static으로 Node가 정적파일 제공할 수도 있지만
// 일반적으로 nginx 같은 프록시 서버가 제공하는 것이 더 성능이 좋음
app.use(express.static(path.join(__dirname, 'src')));

io.on('connection', (socket) => {
  socket.on('chatting', (data) => {
    io.emit('chatting', data);
  });
});

server.listen(PORT, () => console.log(`server is running ${PORT}`));
