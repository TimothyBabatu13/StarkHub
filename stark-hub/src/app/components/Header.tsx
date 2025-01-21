import Image from "next/image"
import Link from "next/link"
import { WalletConnectButton } from "./Buttons"

const Header = () => {
    const links = [
        {
            text: 'Docs',
            url: ''
        },
        {
            text: 'Audits',
            url: ''
        },
        {
            text: 'About Us',
            url: ''
        },
        {
            text: 'Support',
            url: ''
        }
    ]
  return (
    <header className="max-w-[90%] mx-auto flex items-center justify-between py-3">
        <Link 
            href={'/'}
            className="flex items-center"
        >
            <Image 
                src={'/logo svg svg.svg'}
                height={30}
                width={30}
                alt="logo"
            />
            <span className="text-[#0C0C4F] logo-name text-2xl ml-2 font-bold">STARKHUB</span>
        </Link>
        <ul className="flex items-center gap-14 ul">
            {
                links.map(link => (
                    <li 
                        key={crypto.randomUUID()}
                        className="text-base font-bold"
                    >
                        <Link href={link.url}>{link.text}</Link>
                    </li>
                ))
            }
        </ul>
        <WalletConnectButton />
    </header>
  )
}

export default Header