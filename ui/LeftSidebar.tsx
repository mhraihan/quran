import Link from "next/link";
import { BsBook } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { CiSettings, CiHeart } from "react-icons/ci";
import Logo from "./Logo";

const LeftSidebar = () => {
  return (
    <aside className="sidebar sidebar-left w-[70px] flex flex-col items-center ">
      <Logo />
      <div className="flex flex-col justify-between h-full w-full mt-6 py-5">
        <div className="left-sidebar-top w-full flex flex-col items-center  gap-5 justify-center">
          <Link href="/">
            <BsBook className="sidebar-icon" />
          </Link>
          <Link href="/">
            <CiHeart className="sidebar-icon" />
          </Link>
        </div>
        <div className="left-sidebar-top w-full flex flex-col items-center justify-center gap-5">
          <Link href="/">
            <CiSettings className="sidebar-icon" />
          </Link>
          <Link href="/">
            <FiLogOut className="sidebar-icon" />
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default LeftSidebar;
