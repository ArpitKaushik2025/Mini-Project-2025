import { Server } from "socket.io";

export let io;

export function setupSocket(server) {
  // Create new web socket server
  io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    },
  });

  // Listen for new socket connections
  io.on("connection", (socket) => {
    console.log("New Connection : ", socket.id);

    // Listen for socket disconnections
    socket.on("disconnect", () => {
      console.log("Client Disconnected : ", socket.id);
    });
  });

  return io;
}
