import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between px-6 min-h-11">
      <div className="flex-grow flex h-full items-center justify-between">
        <Link className="text-sm" href={"/"}>
          Support
        </Link>
        <Link className="text-sm" href={"/"}>
          Search
        </Link>
      </div>
      <div className="w-44 flex justify-end">
        <Button className="text-xs px-5 h-[28px]">
         Support
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
