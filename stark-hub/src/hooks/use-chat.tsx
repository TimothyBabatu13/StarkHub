'use client';

import { createContext, use } from "react";

interface useChatType {
    children: React.ReactNode
}

interface messageType {

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

export const useChatContext = () => {
    const context = use(ChatContext);
    if(!context){
        return;
    }
    return context
}

export default UseChat