import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between px-6 min-h-11">
      <div className="flex-grow flex h-full items-center justify-between">
        <div className="flex gap-4 text-base">
          <Link className=" font-bold" href={"/"}>
            Quran
          </Link>
          <Link className="" href={"/"}>
            Hadith
          </Link>
        </div>
      </div>
      <div className="w-44 flex justify-end">
        <Button className="text-xs px-5 h-[28px] rounded-full">Support</Button>
      </div>
    </nav>
  );
};

export default Navigation;
