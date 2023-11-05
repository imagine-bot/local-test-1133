import React, { useState, useEffect, useRef } from 'react';

interface Message {
  sender: string;
  time: string;
  content: string;
}

interface ChatProps {
  messages: Message[];
}

const Chat: React.FC<ChatProps> = ({ messages }) => {
  const [username, setUsername] = useState('');
  const [newMessage, setNewMessage] = useState('');
  const messageRef = useRef<HTMLDivElement | null>(null);

  const handleSend = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle sending message here
    setNewMessage('');
  };

  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className="flex flex-col h-full bg-white p-4 rounded-lg shadow-md">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your username"
        className="mb-4 p-2 border rounded-lg"
      />
      <div className="flex-grow overflow-y-auto mb-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex flex-col mb-4 last:mb-0 ${
              message.sender === username ? 'items-end' : ''
            }`}
          >
            <span className="font-bold">{message.sender}</span>
            <span className="text-sm text-gray-500">{message.time}</span>
            <div
              className={`p-2 rounded-lg ${
                message.sender === username
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-black'
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}
        <div ref={messageRef} />
      </div>
      <form onSubmit={handleSend} className="flex">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message"
          className="flex-grow p-2 border rounded-lg mr-2"
          autoFocus
        />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded-lg">
          Send
        </button>
      </form>
    </div>
  );
};

export default Chat;