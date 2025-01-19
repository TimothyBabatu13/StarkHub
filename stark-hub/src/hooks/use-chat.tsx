'use client';

import { createContext, use } from "react";

interface useChatType {
    children: React.ReactNode
}

interface messageType {
    message?: string
}

interface ChatContext {
    messages : messageType[]
}

const ChatContext = createContext<ChatContext>({
    messages: []
}) 

const UseChat = ({ children } : useChatType) => {
    // const [messageValue, setMessageValue] = useState('');
  return (
    <ChatContext.Provider value={{
        messages: []
    }}>
        {children}
    </ChatContext.Provider>
  )
}

export const useChatContext = (): ChatContext => {
    const context = use(ChatContext);
    return context
}

export default UseChat