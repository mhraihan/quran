"use client";
import Link from "next/link";
import { BsBook } from "react-icons/bs";
import { FiHome, FiLogOut } from "react-icons/fi";
import { CiSettings, CiHeart } from "react-icons/ci";
import Logo from "@/ui/Logo";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const LeftSidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="sidebar sidebar-left w-[70px] flex flex-col items-center ">
      <Logo />
      <div className="flex flex-col justify-between h-full w-full mt-6 py-5">
        <div className="left-sidebar-top w-full flex flex-col items-center  gap-5 justify-center">
          <Link
            href="/"
            className={cn({
              active: pathname === "/",
            })}
          >
            <FiHome className="w-6 h-6" />
          </Link>
          <Link
            href="/quran"
            className={cn({
              active: pathname === "/quran",
            })}
          >
            <BsBook className="w-5 h-5" />
          </Link>
          <Link
            href="/favorite"
            className={cn({
              active: pathname === "/favorite",
            })}
          >
            <CiHeart className="w-7 h-7" />
          </Link>
        </div>
        <div className="left-sidebar-top w-full flex flex-col items-center justify-center gap-5">
          <Link
            href="/settings"
            className={cn({
              active: pathname === "/settings",
            })}
          >
            <CiSettings className="w-7 h-7" />
          </Link>
          <Link
            href="/logout"
            className={cn({
              active: pathname === "/logout",
            })}
          >
            <FiLogOut className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default LeftSidebar;
