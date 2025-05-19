import React, { useState } from 'react';

function Messages() {
  const [selectedChat, setSelectedChat] = useState(null);
  const [messageInput, setMessageInput] = useState('');
  
  const [chats] = useState([
    {
      id: 1,
      user: {
        name: 'John Smith',
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
        online: true,
      },
      lastMessage: {
        text: 'Hi, I saw your proposal for the web development project...',
        timestamp: '10:30 AM',
        unread: true,
      },
    },
    {
      id: 2,
      user: {
        name: 'Sarah Johnson',
        avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
        online: true,
      },
      lastMessage: {
        text: 'The design looks great! Can we discuss the timeline?',
        timestamp: 'Yesterday',
        unread: false,
      },
    },
    {
      id: 3,
      user: {
        name: 'Mike Brown',
        avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
        online: false,
      },
      lastMessage: {
        text: 'Thanks for completing the project ahead of schedule!',
        timestamp: '2 days ago',
        unread: false,
      },
    },
  ]);

  const [messages] = useState({
    1: [
      {
        id: 1,
        sender: 'them',
        text: 'Hi, I saw your proposal for the web development project...',
        timestamp: '10:30 AM',
      },
      {
        id: 2,
        sender: 'me',
        text: 'Hello! Yes, I\'m very interested in the project. Would you like to discuss the details?',
        timestamp: '10:32 AM',
      },
      {
        id: 3,
        sender: 'them',
        text: 'That would be great! What\'s your availability for a quick call?',
        timestamp: '10:35 AM',
      },
    ],
    2: [
      {
        id: 1,
        sender: 'them',
        text: 'The design looks great! Can we discuss the timeline?',
        timestamp: 'Yesterday',
      },
    ],
    3: [
      {
        id: 1,
        sender: 'them',
        text: 'Thanks for completing the project ahead of schedule!',
        timestamp: '2 days ago',
      },
    ],
  });

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!messageInput.trim() || !selectedChat) return;

    // TODO: Implement actual message sending logic
    console.log('Sending message:', messageInput);
    setMessageInput('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        <div className="grid grid-cols-12 h-[calc(100vh-12rem)]">
          {/* Chat List */}
          <div className="col-span-4 border-r dark:border-gray-700">
            <div className="p-4 border-b dark:border-gray-700">
              <input
                type="text"
                placeholder="Search messages..."
                className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-light dark:bg-gray-700"
              />
            </div>
            <div className="overflow-y-auto h-[calc(100vh-16rem)]">
              {chats.map((chat) => (
                <div
                  key={chat.id}
                  onClick={() => setSelectedChat(chat.id)}
                  className={`p-4 border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer ${
                    selectedChat === chat.id ? 'bg-gray-50 dark:bg-gray-700' : ''
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <img
                        src={chat.user.avatar}
                        alt={chat.user.name}
                        className="w-12 h-12 rounded-full"
                      />
                      {chat.user.online && (
                        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-medium truncate">{chat.user.name}</h3>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {chat.lastMessage.timestamp}
                        </span>
                      </div>
                      <p
                        className={`text-sm truncate ${
                          chat.lastMessage.unread
                            ? 'text-gray-900 dark:text-white font-medium'
                            : 'text-gray-500 dark:text-gray-400'
                        }`}
                      >
                        {chat.lastMessage.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Window */}
          <div className="col-span-8 flex flex-col">
            {selectedChat ? (
              <>
                {/* Chat Header */}
                <div className="p-4 border-b dark:border-gray-700 flex items-center space-x-4">
                  <div className="relative">
                    <img
                      src={chats.find((c) => c.id === selectedChat).user.avatar}
                      alt={chats.find((c) => c.id === selectedChat).user.name}
                      className="w-10 h-10 rounded-full"
                    />
                    {chats.find((c) => c.id === selectedChat).user.online && (
                      <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 border-2 border-white rounded-full"></span>
                    )}
                  </div>
                  <div>
                    <h2 className="font-medium">
                      {chats.find((c) => c.id === selectedChat).user.name}
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {chats.find((c) => c.id === selectedChat).user.online
                        ? 'Online'
                        : 'Offline'}
                    </p>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages[selectedChat].map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${
                        message.sender === 'me' ? 'justify-end' : 'justify-start'
                      }`}
                    >
                      <div
                        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                          message.sender === 'me'
                            ? 'bg-primary-light text-white'
                            : 'bg-gray-100 dark:bg-gray-700'
                        }`}
                      >
                        <p className="text-sm">{message.text}</p>
                        <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 block">
                          {message.timestamp}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Message Input */}
                <form onSubmit={handleSendMessage} className="p-4 border-t dark:border-gray-700">
                  <div className="flex space-x-4">
                    <input
                      type="text"
                      value={messageInput}
                      onChange={(e) => setMessageInput(e.target.value)}
                      placeholder="Type a message..."
                      className="flex-1 px-4 py-2 rounded-lg border dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-light dark:bg-gray-700"
                    />
                    <button
                      type="submit"
                      className="bg-primary-light hover:bg-primary-dark text-white px-6 py-2 rounded-lg transition-colors"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center">
                <p className="text-gray-500 dark:text-gray-400">
                  Select a conversation to start messaging
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Messages;