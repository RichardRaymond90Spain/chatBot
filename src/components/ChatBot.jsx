import React, { useState } from 'react';
import { Container, TextField, Button, List, ListItem, ListItemText } from '@mui/material';
import { motion } from 'framer-motion';

// Placeholder function to simulate chatbot response
const fetchChatBotResponse = async (message) => {
  // Replace this with actual call to Azure's chatbot service
  return `You said: ${message}`;
};

function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { sender: 'user', text: input }];
    setMessages(newMessages);
    setInput('');

    const response = await fetchChatBotResponse(input);
    setMessages([...newMessages, { sender: 'bot', text: response }]);
  };

  return (
    <Container>
      <List>
        {messages.map((msg, index) => (
          <ListItem key={index}>
            <ListItemText primary={msg.text} secondary={msg.sender} />
          </ListItem>
        ))}
      </List>
      <TextField
        label="Type your message"
        fullWidth
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleSendMessage}>
        Send
      </Button>
    </Container>
  );
}

export default ChatBot;
