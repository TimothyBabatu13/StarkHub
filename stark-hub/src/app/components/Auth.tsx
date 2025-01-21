import Image from "next/image"
import { ConnectButton } from "./Buttons"

const Auth = () => {
  return (
    <div className="max-w-[90%] flex flex-col justify-center mx-auto text-center mt-2.5">
        <Image 
            src={'/animation splash screen.svg'}
            width={279}
            height={348}
            alt="animation splash screen icon"
            draggable={false}
            className="mx-auto"
        />
        <h2 className="text-[#0C0C4F] text-xl mt-[30px]">A unified hub for AI-driven DeFi
        innovation on Starknet.</h2>
       <div className="mt-[20px]">
        <ConnectButton />
       </div>
    </div>
  )
}

export default Auth