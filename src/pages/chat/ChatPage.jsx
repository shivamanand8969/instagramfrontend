import React, { useState } from 'react';
import UserList from '../../components/chat/UserList';
import ChatWindow from '../../components/chat/ChatWidnowPage';

const ChatPage = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const handleBackClick = () => {
    setSelectedUser(null);
  };

  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full  flex shadow-lg rounded-lg overflow-hidden bg-white">
        <div className={`flex flex-col w-full md:w-1/3 ${selectedUser ? 'hidden md:flex' : ''}`}>
          <UserList onUserClick={handleUserClick} />
        </div>
        <div className={`w-full md:w-2/3 ${selectedUser ? 'block' : 'hidden md:block'}`}>
          <ChatWindow userId={selectedUser} onBackClick={handleBackClick} />
        </div>
      </div>
    </section>
  );
};

export default ChatPage;
