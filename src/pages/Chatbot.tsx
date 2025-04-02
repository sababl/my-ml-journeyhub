
import React, { useState } from 'react';
import { Send, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from 'sonner';

// Define message types
interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    // Dummy initial messages for visualization
    {
      id: '1',
      content: 'Hello! I am your question answering assistant. Ask me anything!',
      isUser: false,
      timestamp: new Date(),
    }
  ]);
  
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputValue.trim()) return;
    
    // Create user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue.trim(),
      isUser: true,
      timestamp: new Date(),
    };
    
    // Add user message to chat
    setMessages(prev => [...prev, userMessage]);
    
    // Clear input
    setInputValue('');
    
    // Simulate API call
    setIsLoading(true);
    
    try {
      // This is where you would make your actual API call
      // For now, we'll just simulate a response after a delay
      setTimeout(() => {
        // Sample responses for demonstration
        const sampleResponses = [
          "Based on my analysis, the answer to your question is...",
          "According to available information, I can tell you that...",
          "That's an interesting question! Here's what I know...",
          "The data suggests that...",
          "After processing your question, I found that..."
        ];
        
        const randomResponse = sampleResponses[Math.floor(Math.random() * sampleResponses.length)];
        
        // Create system response message
        const botResponse: Message = {
          id: Date.now().toString(),
          content: `${randomResponse} This is a simulated response to: "${userMessage.content}"`,
          isUser: false,
          timestamp: new Date(),
        };
        
        // Add system response to chat
        setMessages(prev => [...prev, botResponse]);
        setIsLoading(false);
      }, 1500);
    } catch (error) {
      console.error('Error fetching response:', error);
      toast.error('Failed to get response. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-primary mb-4">Question Answering System</h1>
        
        {/* Description section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-start">
            <HelpCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-semibold mb-2">How It Works</h2>
              <p className="text-gray-600 mb-3">
                This question answering system uses advanced natural language processing to provide accurate 
                answers to your queries. Simply type your question in the input field below and receive 
                an AI-generated response based on a comprehensive knowledge base.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 text-sm">
                <p className="font-medium text-blue-700">Tips for best results:</p>
                <ul className="list-disc list-inside text-blue-600 mt-2 space-y-1">
                  <li>Ask clear, specific questions</li>
                  <li>Provide context when needed</li>
                  <li>Try rephrasing if you don't get the answer you expected</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <Card className="mb-4">
          <CardContent className="p-6">
            <div className="flex flex-col gap-4 mb-4 max-h-[60vh] overflow-y-auto">
              {messages.map((message) => (
                <div 
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`p-4 rounded-lg max-w-[80%] ${
                      message.isUser 
                        ? 'bg-primary text-white' 
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <p>{message.content}</p>
                    <p className="text-xs mt-1 opacity-70">
                      {message.timestamp.toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 text-gray-800 p-4 rounded-lg">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
        
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask a question..."
            disabled={isLoading}
            className="flex-grow"
          />
          <Button type="submit" disabled={isLoading}>
            <Send className="h-4 w-4 mr-2" />
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;
