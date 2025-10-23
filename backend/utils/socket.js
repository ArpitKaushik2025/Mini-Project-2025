import { Server } from "socket.io";

export let io;

export function setupSocket(server) {
  const io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    },
  });

  io.on("connection", (socket) => {
    console.log("New Connection : ", socket.id);

    socket.on("disconnect", () => {
      console.log("Client Disconnected : ", socket.id);
    });
  });

  return io;
}
