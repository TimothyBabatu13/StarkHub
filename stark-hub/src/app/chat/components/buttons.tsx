'use client';

import { InvestIcon, ManageIcon, MintIcon, PromptIcon, SwapIcon } from "@/app/components/icons";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

  const Button = ({
    children,
    text
  } : {
    children: React.ReactNode,
    text: string
  }) => {
    return (
        // border-[#000000] border-[0.5px] shadow
      <div 
        className="w-full flex items-center gap-[2px] py-[11px] pl-[18.91px] "
      >
        {children}
        <span className="text-xl font-bold">{text}</span>
      </div>
    )
  }
  
  export function Buttons() {
    return (
      <Accordion type="single" collapsible className="grid grid-cols-2 gap-3">
        <AccordionItem value="item-1" className="border-b-0 border-[0.5px] h-fit border-[#000000] rounded-[6px]">
          <AccordionTrigger className="hover:no-underline h-[46px]">
            <Button text="Invest">
                <InvestIcon />
            </Button>
          </AccordionTrigger>
          <AccordionContent>
            <div className="pl-[18.91px]">
                For the Defi assistant offering personalized blockchain investment
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="border-b-0 border-[0.5px] h-fit  border-[#000000] rounded-[6px]">
          <AccordionTrigger className="hover:no-underline h-[46px]">
          <Button text="Prompt">
                <PromptIcon />
            </Button>
        </AccordionTrigger>
          <AccordionContent>
            <p className="pl-[18.91px]">Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="border-b-0 border-[0.5px] h-fit border-[#000000] rounded-[6px]">
          <AccordionTrigger className="hover:no-underline h-[46px]">
            <Button text="Mint">
                <MintIcon />
            </Button>
          </AccordionTrigger>
          <AccordionContent>
            <p className="pl-[18.91px]">Yes. It&apos;s animated by default, but you can disable it if you prefer. ,</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4" className="border-b-0 border-[0.5px] h-fit border-[#000000] rounded-[6px]">
          <AccordionTrigger className="hover:no-underline h-[46px]">
            <Button text="Manage">
                <ManageIcon />
            </Button>
          </AccordionTrigger>
          <AccordionContent>
            <div className="pl-[18.91px]">
                For the all-in-one finance management platform
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5" style={{gridColumn: '1/-1'}} className="border-b-0 place-self-center min-w-[161px] border-[0.5px] h-fit border-[#000000] rounded-[6px]">
          <AccordionTrigger className="hover:no-underline h-[46px]">
            <Button text="Swap">
                <SwapIcon />
            </Button>
          </AccordionTrigger>
          <AccordionContent>
            <div className="pl-[18.91px]">
                For all-in-one finance management. For the agent facilitating token swaps withput repeated signatures platform
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  



