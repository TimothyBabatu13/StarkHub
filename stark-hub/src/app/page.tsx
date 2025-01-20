import Link from "next/link";
import Auth from "./components/Auth";

export default function Home() {
  return (
    <div className=" text-black">
      <Auth />
      <Link href={'/chat'}>Chat</Link>
    </div>
  );
}
