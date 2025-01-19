'use client';
import { useChatContext } from "@/hooks/use-chat";
import NoMessage from "./components/no-message"

const Page = () => {
    const { messages } = useChatContext();
    
  return (
    <div className="max-w-[90%] mx-auto py-5">
        {
            messages.length < 1 ? <NoMessage /> : <div>Messages is coming</div>        
        }
    </div>
  )
}

export default Page