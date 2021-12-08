const app = require('express')();

const server = require('http').createServer(app);

const io = require('socket.io')(server,{
    cors: {
        origin: "*"
      }
})

io.on("connection",(socket)=>{
    console.log("socket---->",socket);
    console.log("Socket is connected");

    socket.on("chat",(payload)=>{
        console.log("payload---->",payload);
        io.emit("chat",payload)
    })
})

// app.listen(5000,()=>console.log("server is active..."))

server.listen(5000,()=>{
    console.log("server is listening at port 5000..")
})