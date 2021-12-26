# Socket.io Practice

<br>

## **Prerequisites**

- express
- socket.io
- moment.js

`npm install express socket.io moment`

<br>

## **Socket.io**

**_중요 함수_**

- `socket.on('이벤트 명', Callback Function)`
  - 해당 이벤트를 받고 콜백함수를 실행
- `socket.emit('이벤트 명', Data)`
  - 이벤트 명을 지정하고 데이터 전송

<br>

**_기본 이벤트 명_**

- `connection` : Client 와 연결되었을 때 발생
- `disconnection` : Client 와 연결해제되었을 때 발생
