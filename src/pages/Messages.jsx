import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPaperPlane,
  FaSearch,
  FaEllipsisV,
  FaPhone,
  FaVideo,
} from "react-icons/fa";

function Messages() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const [selectedChat, setSelectedChat] = useState(null);
  const [messageInput, setMessageInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const [chats] = useState([
    {
      id: 1,
      user: {
        name: "John Smith",
        avatar:
          "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
        online: true,
        role: "Client",
      },
      lastMessage: {
        text: "Hi, I saw your proposal for the web development project...",
        timestamp: "10:30 AM",
        unread: true,
      },
    },
    {
      id: 2,
      user: {
        name: "Sarah Johnson",
        avatar:
          "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
        online: true,
        role: "Freelancer",
      },
      lastMessage: {
        text: "The design looks great! Can we discuss the timeline?",
        timestamp: "Yesterday",
        unread: false,
      },
    },
    {
      id: 3,
      user: {
        name: "Mike Brown",
        avatar:
          "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
        online: false,
        role: "Client",
      },
      lastMessage: {
        text: "Thanks for completing the project ahead of schedule!",
        timestamp: "2 days ago",
        unread: false,
      },
    },
  ]);

  const [messages] = useState({
    1: [
      {
        id: 1,
        sender: "them",
        text: "Hi, I saw your proposal for the web development project...",
        timestamp: "10:30 AM",
      },
      {
        id: 2,
        sender: "me",
        text: "Hello! Yes, I'm very interested in the project. Would you like to discuss the details?",
        timestamp: "10:32 AM",
      },
      {
        id: 3,
        sender: "them",
        text: "That would be great! What's your availability for a quick call?",
        timestamp: "10:35 AM",
      },
    ],
    2: [
      {
        id: 1,
        sender: "them",
        text: "The design looks great! Can we discuss the timeline?",
        timestamp: "Yesterday",
      },
    ],
    3: [
      {
        id: 1,
        sender: "them",
        text: "Thanks for completing the project ahead of schedule!",
        timestamp: "2 days ago",
      },
    ],
  });

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!messageInput.trim() || !selectedChat) return;

    // TODO: Implement actual message sending logic
    console.log("Sending message:", messageInput);
    setMessageInput("");
  };

  const filteredChats = chats.filter((chat) =>
    chat.user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold">Messages</h1>
        <p className="text-gray-600 mt-2">
          Communicate with your clients and freelancers
        </p>
      </motion.div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="grid grid-cols-12 h-[calc(100vh-12rem)]">
          {/* Chat List */}
          <div className="col-span-12 md:col-span-4 border-r">
            <div className="p-4 border-b">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search messages..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary-light"
                />
                <FaSearch className="absolute left-3 top-3 text-gray-400" />
              </div>
            </div>
            <div className="overflow-y-auto h-[calc(100vh-16rem)]">
              <AnimatePresence>
                {filteredChats.map((chat) => (
                  <motion.div
                    key={chat.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    onClick={() => setSelectedChat(chat.id)}
                    className={`p-4 border-b hover:bg-gray-50 cursor-pointer transition-colors ${
                      selectedChat === chat.id ? "bg-primary-50" : ""
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <img
                          src={chat.user.avatar}
                          alt={chat.user.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                        />
                        {chat.user.online && (
                          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></span>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm font-medium truncate">
                            {chat.user.name}
                          </h3>
                          <span className="text-xs text-gray-500">
                            {chat.lastMessage.timestamp}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <p
                            className={`text-sm truncate ${
                              chat.lastMessage.unread
                                ? "text-gray-900 font-medium"
                                : "text-gray-500"
                            }`}
                          >
                            {chat.lastMessage.text}
                          </p>
                          <span className="text-xs px-2 py-1 rounded-full bg-primary-100 text-primary-600">
                            {chat.user.role}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Chat Window */}
          <div className="col-span-12 md:col-span-8 flex flex-col">
            {selectedChat ? (
              <>
                {/* Chat Header */}
                <div className="p-4 border-b flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <img
                        src={
                          chats.find((c) => c.id === selectedChat).user.avatar
                        }
                        alt={chats.find((c) => c.id === selectedChat).user.name}
                        className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                      />
                      {chats.find((c) => c.id === selectedChat).user.online && (
                        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 border-2 border-white rounded-full"></span>
                      )}
                    </div>
                    <div>
                      <h2 className="font-medium">
                        {chats.find((c) => c.id === selectedChat).user.name}
                      </h2>
                      <p className="text-sm text-gray-500">
                        {chats.find((c) => c.id === selectedChat).user.online
                          ? "Online"
                          : "Offline"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button className="p-2 text-gray-500 hover:text-primary-600 transition-colors">
                      <FaPhone />
                    </button>
                    <button className="p-2 text-gray-500 hover:text-primary-600 transition-colors">
                      <FaVideo />
                    </button>
                    <button className="p-2 text-gray-500 hover:text-primary-600 transition-colors">
                      <FaEllipsisV />
                    </button>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  <AnimatePresence>
                    {messages[selectedChat].map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className={`flex ${
                          message.sender === "me"
                            ? "justify-end"
                            : "justify-start"
                        }`}
                      >
                        <div
                          className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                            message.sender === "me"
                              ? "bg-primary-600 text-white"
                              : "bg-gray-100"
                          }`}
                        >
                          <p className="text-sm">{message.text}</p>
                          <span className="text-xs opacity-75 mt-1 block">
                            {message.timestamp}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                {/* Message Input */}
                <form onSubmit={handleSendMessage} className="p-4 border-t">
                  <div className="flex space-x-4">
                    <input
                      type="text"
                      value={messageInput}
                      onChange={(e) => setMessageInput(e.target.value)}
                      placeholder="Type a message..."
                      className="flex-1 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary-light"
                    />
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      type="submit"
                      className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg transition-colors flex items-center gap-2"
                    >
                      <FaPaperPlane />
                      Send
                    </motion.button>
                  </div>
                </form>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-gray-500 mb-2">
                    Select a conversation to start messaging
                  </p>
                  <p className="text-sm text-gray-400">
                    Your messages will appear here
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Messages;
