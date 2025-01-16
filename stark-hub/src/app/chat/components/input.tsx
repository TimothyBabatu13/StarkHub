'use client';

const Input = () => {
  return (
     <form className="mt-[32px] w-full shadow  bg-[#FCFCFC] rounded-[32px] py-[22.5px] px-[26.5px]">
        <textarea 
            placeholder="Message STARKHUB" 
            name="" 
            id=""
            className="w-full border-none active:border-none focus:border-none"
        >

        </textarea>
        <div className="min-h-[52px] max-h-[52px] max-w-[52px] min-w-[52px] bg-[#000000] rounded-full grid ml-[15px]  place-items-center">
            
        </div>
    </form>
  )
}

export default Input