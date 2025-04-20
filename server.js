import express from "express";
import { Server } from "socket.io";
import { createServer } from "http";

const app = express();
const PORT = 5001;

// Creating an HTTP server using the Express app
const server = createServer(app);

// Creating a Socket.IO server and attach it to the HTTP server
const io = new Server(server, {
  cors: {
    origin: "*", 
  },
});


let socketsConnected = new Set();
// Socket.IO connection handler
io.on("connection", onConnected)

function onConnected(socket) {
  console.log("Socket connected", socket.id);
  socketsConnected.add(socket.id);
  io.emit("clients-total", socketsConnected.size)


  socket.on("disconnect", () => {
    console.log("Socket disconnected", socket.id);
    socketsConnected.delete(socket.id);
    io.emit("clients-total", socketsConnected.size)
  })

  socket.on("chat-message", (data) => {
    socket.broadcast.emit("chat-message", data); // to others
    socket.emit("chat-message", data);           // to sender
  })

  socket.on("typing", (name) => {
    socket.broadcast.emit("user-typing", name);
  });
}

// Start the combined HTTP + WebSocket server
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});