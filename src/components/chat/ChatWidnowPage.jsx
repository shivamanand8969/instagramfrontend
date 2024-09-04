import React, { useState } from 'react';
import { IconButton, TextField, Box, Typography, Divider, Avatar } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SendIcon from '@mui/icons-material/Send';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

const defaultMessages = [
  { id: 1, text: 'Hi there! How are you?', sender: 'John Doe', avatar: '/path/to/avatar1.jpg', date: '2024-09-01', reactions: [] },
  { id: 2, text: 'I am good, thanks! What about you?', sender: 'Jane Smith', avatar: '/path/to/avatar2.jpg', date: '2024-09-01', reactions: [] },
  { id: 3, text: 'I am doing well, just working on a project.', sender: 'John Doe', avatar: '/path/to/avatar1.jpg', date: '2024-09-01', reactions: [] },
  { id: 4, text: 'That sounds great! I am also working on something exciting.', sender: 'You', avatar: '/path/to/your/avatar.jpg', date: '2024-09-02', reactions: [] },
  { id: 5, text: 'What project are you working on?', sender: 'Jane Smith', avatar: '/path/to/avatar2.jpg', date: '2024-09-02', reactions: [] },
  { id: 6, text: 'I am developing a new feature for my app. It’s quite challenging but fun.', sender: 'You', avatar: '/path/to/your/avatar.jpg', date: '2024-09-02', reactions: [] },
  { id: 7, text: 'Sounds interesting! Let me know if you need any help.', sender: 'John Doe', avatar: '/path/to/avatar1.jpg', date: '2024-09-03', reactions: [] },
];

const ChatWindow = ({ userId, onBackClick }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState(defaultMessages);

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([
        ...messages,
        { id: messages.length + 1, text: message, sender: 'You', avatar: '/path/to/your/avatar.jpg', date: new Date().toISOString().split('T')[0], reactions: [] },
      ]);
      setMessage('');
    }
  };

  const handleReact = (messageId, reaction) => {
    setMessages((prevMessages) =>
      prevMessages.map((msg) =>
        msg.id === messageId ? { ...msg, reactions: [...msg.reactions, reaction] } : msg
      )
    );
  };

  // Group messages by date
  const groupedMessages = messages.reduce((acc, msg) => {
    if (!acc[msg.date]) {
      acc[msg.date] = [];
    }
    acc[msg.date].push(msg);
    return acc;
  }, {});

  return (
    <Box className="flex flex-col h-full" sx={{ borderRadius: '8px', border: '1px solid #ddd' }}>
      {/* Header */}
      <Box className="flex items-center p-3 border-b border-gray-300" sx={{ backgroundColor: '#f4f4f4' }}>
        <IconButton onClick={onBackClick} className="md:hidden">
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h6" className="ml-2">
          {userId ? `Chat with ${userId.name} ` : 'Select a User'}
        </Typography>
      </Box>

      {/* Chat Messages */}
      <Box className="flex-grow p-4 h-[70vh] overflow-y-scroll" sx={{ backgroundColor: '#fafafa' }}>
        {Object.keys(groupedMessages).map((date) => (
          <React.Fragment key={date}>
            <Typography variant="caption" color="textSecondary" sx={{ textAlign: 'center', marginY: 1, fontSize: '0.75rem' }}>
              {date}
            </Typography>
            <Divider sx={{ marginBottom: 2 }} />
            {groupedMessages[date].map((msg) => (
              <Box key={msg.id} className={`mb-4 flex items-start ${msg.sender === 'You' ? 'justify-end' : 'justify-start'}`}>
                {msg.sender !== 'You' && <Avatar src={msg.avatar} alt={msg.sender} className="mr-2" />}
                <Box sx={{ maxWidth: '60%', backgroundColor: msg.sender === 'You' ? '#dcf8c6' : 'white', borderRadius: '15px', padding: '10px', border: '1px solid #ddd' }}>
                  <Typography variant="body1" className="mb-1">
                    {msg.text}
                  </Typography>
                  <Box className="flex items-center gap-2">
                    <IconButton size="small" onClick={() => handleReact(msg.id, 'like')}>
                      <ThumbUpIcon fontSize="small" />
                    </IconButton>
                    <IconButton size="small" onClick={() => handleReact(msg.id, 'dislike')}>
                      <ThumbDownIcon fontSize="small" />
                    </IconButton>
                    <IconButton size="small" onClick={() => handleReact(msg.id, 'love')}>
                      <FavoriteIcon fontSize="small" />
                    </IconButton>
                    {msg.reactions.length > 0 && (
                      <Typography variant="caption" color="textSecondary">
                        {msg.reactions.join(', ')}
                      </Typography>
                    )}
                  </Box>
                </Box>
              </Box>
            ))}
          </React.Fragment>
        ))}
      </Box>

      <Divider />

      {/* Message Input */}
      <Box className="flex items-center p-4" sx={{ backgroundColor: '#fff', borderTop: '1px solid #ddd' }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          InputProps={{
            endAdornment: (
              <IconButton color="primary" onClick={handleSendMessage}>
                <SendIcon />
              </IconButton>
            ),
          }}
          sx={{ borderRadius: '20px', height: '56px' }}
        />
      </Box>
    </Box>
  );
};

export default ChatWindow;
