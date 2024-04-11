import { Server } from "socket.io";

export default function handler(req, res) {
  if (res.socket.server.io) {
    console.log("Socket is already running");
  } else {
    console.log("Socket is initializing");
    const io = new Server(res.socket.server, {
      path: "/api/socket", // Update the path to match the client-side connection
    });
    io.on("connection", (socket) => {
      socket.on("join-room", (roomId, userId) => {
        socket.join(roomId);
        socket.to(roomId).broadcast.emit("user-connected", userId);

        socket.on("disconnect", () => {
          socket.to(roomId).broadcast.emit("user-disconnected", userId);
        });
      });
    });
    res.socket.server.io = io;
  }
  res.end();
}
