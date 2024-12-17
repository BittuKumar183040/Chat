import React from 'react';
import socket from '../socket/socket';
import Chats from './Chats';

const ChatBox = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const msg = formData.get('msg');
    if (msg.length < 1) {
      console.log("Don't do this");
      return;
    }
    socket.emit('chat', msg);
    e.target.reset();
  };

  return (
    <div className=" flex flex-col w-full h-full p-4 dark:bg-gray-800 shadow-inner">
      <Chats />
      <form
        onSubmit={handleFormSubmit}
        className=" dark:text-white flex justify-between gap-4"
      >
        <input
          name="msg"
          className=" flex-1 outline-none border px-4 rounded-md text-sm"
          type=" text"
          placeholder=" Enter to send"
        />
        <input
          className=" p-2 px-8 cursor-pointer text-sm bg-gray-200 border rounded-md
          dark:bg-gray-800 active:scale-95 "
          type="submit"
          value="Send"
        />
      </form>
    </div>
  );
};

export default ChatBox;
