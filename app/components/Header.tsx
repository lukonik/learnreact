import { Star } from "lucide-react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="border-b border-zinc-300 h-14 flex items-center px-4">
      <Image src="/logo.svg" alt="Learn React Logo" width={32} height={32} />
      <span className="font-serif font-medium text-xl ml-2">Learn React</span>
      <a
        href="https://github.com/lukonik/learnreact"
        className="ml-auto border border-zinc-400 rounded-sm h-10 flex items-center px-3 py-1 text-sm hover:bg-zinc-100 transition"
      >
        Give a star
        <Star className="fill-amber-300 text-amber-300 ml-1" size={20} />
      </a>
    </header>
  );
}
