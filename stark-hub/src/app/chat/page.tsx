import Image from "next/image"
import Input from "./components/input"

const page = () => {
  return (
    <div className="max-w-[90%] mx-auto">
        <Image 
            src={'/logo.svg'}
            height={150}
            width={150}
            alt="logo"
            className="mx-auto"
        />
        <div className="mt-[32px] w-full  bg-[#FFF9F9] shadow rounded-[32px] flex items-center py-[22.5px] px-[26.5px]">
            <p className="text-xs font-medium">Simplify DeFi on Starknet. Manage yield farming,
            wallets, swaps, and memecoin launches...</p>
            <div className="min-h-[52px] max-h-[52px] max-w-[52px] min-w-[52px] bg-[#000000] rounded-full grid ml-[15px]  place-items-center">
                <Image 
                    src={'/iconoir_magic-wand.svg'}
                    height={24}
                    width={24}
                    alt="magic stick"
                    className="min-h-[24px] min-w-[24px]"
                />
            </div>
        </div>
        <Input />
    </div>
  )
}

export default page