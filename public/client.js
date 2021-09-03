const socket = io();

const socket = io("http://localhost:3000");

socket.on("connect", (socket) => {
    console.log(socket.id); // x8WIv7-mJelg7on_ALbx
});
