const http = require('http');
const { Server } = require('socket.io');

const server = http.createServer();
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  const { id } = socket.handshake.query;
  console.log(`User connected: ${id}`);

  socket.on('code-update', (newCode) => {
    console.log(`Received code update for ${id}: ${newCode}`);
    socket.broadcast.emit('code-update', newCode);
  });

  socket.on('disconnect', () => {
    console.log(`User disconnected: ${id}`);
  });
});

server.listen(3001, () => {
  console.log('Socket.IO server is running on port 3001');
});