'use client';

import { GlobeIcon, SendButton, UploadIcon } from "@/app/components/icons";
import { Textarea } from "@/components/ui/textarea";
import { MouseEvent, useRef } from "react";

const Input = () => {

  const inputRef = useRef<null | HTMLTextAreaElement>(null)
  const handleFocusTextArea = () => {
    inputRef.current?.focus();
  }
  const stopPropagation = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
  }
  const handleUpLoadFiles = (e: MouseEvent<HTMLButtonElement>) => {
    stopPropagation(e);
  }
  const handleSearch = (e: MouseEvent<HTMLButtonElement>) => {
    stopPropagation(e);
  }
  const handleSend = (e: MouseEvent<HTMLButtonElement>) => {
    stopPropagation(e);
  }
  return (
     <form 
     onClick={handleFocusTextArea}
      className="w-full shadow  bg-[#FCFCFC] rounded-[32px] py-[22.5px] pb-[45px] px-[26.5px] relative"
    >
        <Textarea 
          placeholder="Message STARKHUB"
          className="border-none focus-visible:ring-0 shadow-none"
          ref={inputRef}
        />
        <div
          className="absolute flex justify-between w-full bottom-[22.5px] left-0 px-[26.5px]"
        >
          <div className="flex gap-[15px]">
            <button 
              onClick={handleUpLoadFiles}
            >
              <UploadIcon />
            </button>
            <button
              onClick={handleSearch}
            >
              <GlobeIcon />
            </button>
          </div>
          <button
            onClick={handleSend}
          >
            <SendButton />
          </button>
        </div>
    </form>
  )
}

export default Input