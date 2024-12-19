import React, { memo, useState, useEffect, useRef } from "react";
import socket from "../socket/socket";

const Chats = () => {
  const [msg, setMsg] = useState();
  const container = useRef();
  const messages = useRef();
  const selfId = localStorage.getItem("self");
  socket.on("chat", (msg) => {
    setMsg(msg);
  });
  useEffect(() => {
    if (msg) {
      console.log(msg);
      const li = document.createElement("li");
      const p = document.createElement("p");
      console.log(msg.user, selfId);
      if (msg.user === selfId) {
        li.classList.add("myself");
      } else {
        li.classList.add("other");
      }
      p.innerHTML = msg.message;
      li.appendChild(p);
      console.log(li);
      messages.current.appendChild(li);

      if (container.current) {
        container.current.scrollTop = container.current.scrollHeight;
      }
    }
  }, [msg]);
  return (
    <div
      ref={container}
      className=" h-full p-4 mb-4 overflow-scroll flex flex-col-reverse"
    >
      <ol ref={messages} className=" "></ol>
    </div>
  );
};

export default memo(Chats);
