import { io } from "socket.io-client";

const socket = io(import.meta.env.VITE_API_BACKEND_URL);

socket.on("connect", () => {
  localStorage.setItem("self", socket.id);
  console.log(socket.id);
  socket.emit("joinRoom", socket.id);
});

export default socket;
