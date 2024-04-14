import { Server } from "socket.io";

const io = new Server();

io.on("connection",socket=>{

    socket.on('get-document',documentId=>{
        const data = "";
        socket.join(documentId);
        socket.emit("load-document",data);

        socket.on("send-changes", delta=>{
            socket.broadcast.to(documentId).emit("recieve-changes",delta);
         })
    })

    
})