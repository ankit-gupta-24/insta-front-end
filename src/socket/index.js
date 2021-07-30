import { io } from "socket.io-client";

const URL = "http://localhost:3030";
const socket = io(URL);
window.socket = socket;

socket.on("connect", () => {
  console.log("connected");
});

export default socket;
