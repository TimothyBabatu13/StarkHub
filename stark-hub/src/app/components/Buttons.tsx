'use client';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import Image from "next/image";
import Link from "next/link";
import { WalletIcon, WalletMoneyIcon } from "./icons";
import { usePathname } from "next/navigation";
import { DrawerDialogDemo } from "./responsive-drawer";


export const ConnectButton = () => {
    return<DrawerDialogDemo>
      <button className="w-full h-[51px] rounded-xl text-[#E3769E] border-[#E3769E] border py-4 mt-[10px]">
        <span className="text-base font-bold">Connect wallet</span>
      </button>
    </DrawerDialogDemo>
}

export const WalletConnectButton = () => {
  const pathname = usePathname();
  const isConnected = pathname === '/chat';
  return(
    <>
    {
      isConnected ? (
      <div className="flex items-center p-6 rounded-[32px] gap-3">
        <HoverCard>
          <HoverCardTrigger asChild>
            <div className="flex cursor-pointer hover-card items-center gap-4 border border-[#0C0C4F] rounded-[4px] p-2">
              <WalletMoneyIcon />
              <span className="text-base font-bold">23.03 STRK</span>
            </div>
          </HoverCardTrigger>
          <HoverCardContent>
            Your wallet balance is 23.03 STRK
          </HoverCardContent>
        </HoverCard>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="h-10 w-10 rounded-full">
              <Image 
                src={'/user.png'}
                alt="user image"
                height={40}
                width={40}
                draggable={false}
              />
          </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 mr-8">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                Profile
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem disabled className="balance">
                Balance
                <DropdownMenuShortcut>23.03 STRK</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuItem onClick={() => console.log('logged out')}>
              Log out
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div> ) : (
      <DrawerDialogDemo>
        <button className="flex items-center bg-[#E3769E] connect-button p-6 rounded-[32px] gap-4">
          <span className="text-base font-bold">CONNECT WALLET</span>
          <WalletIcon />
        </button>
      </DrawerDialogDemo>
      
    )
    }
    
    </>
  )
}

const WalletBtn = ( { children, text, className } : {
    children: React.ReactNode,
    text: string,
    className?: string
}) => {
    return(
        <button className={"bg-[#FFFFFF] block relative w-full py-[6px] text-center rounded-[8px] " + className}>
            {children}
            <span className="text-[#0C0C4F] text-xs font-bold">{text}</span>
        </button>
    )
}

export function SignUpButton() {
  return (
    <Dialog>
    <DialogTrigger asChild>
      <div role="button" className="w-full h-[51px] bg-[#E3769E] rounded-xl text-[#0C0C4F] py-4">
        <p className="text-base font-bold">Sign up</p>
    </div>
    </DialogTrigger>
    <DialogContent className="sm:max-w-md bg-[#E3769E] rounded-s-2xl">
      <DialogHeader>
        <DialogTitle></DialogTitle>
        <DialogDescription>
          
        </DialogDescription>
      </DialogHeader>
      <div className="py-[35px]">
        <WalletBtn text="Braavos wallet"> 
            <div className="h-[42px] z-10 shadow -left-4 top-[50%] -translate-y-1/2 w-[42px] absolute rounded-full bg-[#FFFFFF] grid place-items-center">
                <Image 
                    src={'/bravoos wallet.svg'}
                    alt="bravoos wallet"
                    height={27.79}
                    width={24}
                />
            </div>
        </WalletBtn>

        <WalletBtn text="Argent wallet" className="mt-[34px]"> 
            <div className="h-[42px] z-10 shadow -left-4 top-[50%] -translate-y-1/2 w-[42px] absolute rounded-full bg-[#FFFFFF] grid place-items-center">
                <Image 
                    src={'/argent wallet.svg'}
                    alt="bravoos wallet"
                    height={27.79}
                    width={24}
                />
            </div>
        </WalletBtn>

      </div>
      <DialogFooter className="sm:justify-start">
        <DialogClose className="text-center" asChild>
          <p className="text-[#C4C2C2] text-[8px]">Don’t you have wallet to connect with? <Link className="text-[#000000] underline" href={''}>Create one here</Link></p>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
  )
}
