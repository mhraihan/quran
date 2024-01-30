import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { FiUser } from "react-icons/fi";
import { RxReader } from "react-icons/rx";
const RightSidebar = () => {
  return (
    <aside className="sidebar sidebar-right lg:w-52 w-48 px-4 pt-6 pb-5 mt-[2px]">
      <div className="flex flex-col justify-between h-full">
        <div>
          <div className="flex justify-between flex-row-reverse gap-3 items-center border-b pb-6">
            <Avatar>
              <AvatarImage src="" alt="" />
              <AvatarFallback>
                <FiUser />
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-xs  font-normal">Salamu Alaykum,</span>
              <span className="font-bold">MH</span>
            </div>
          </div>
          <div className="flex justify-between flex-row-reverse gap-3 items-start py-6">
            <RxReader className="w-8 h-8" />
            <div className="flex flex-col gap-1">
              <span className="text-[8px] text-primary font-semibold uppercase">
                Last Read
              </span>
              <span className="text-[10px] font-bold">Al-Fatiah</span>
              <span className="text-[8px]">Ayath no: 1</span>
            </div>
          </div>

        </div>
          <Card className="text-[8px] bg-primary text-white shadow-none">
            <CardContent className="p-4 flex flex-col gap-4">
              <CardTitle className="text-muted">Ayath of the day</CardTitle>
              <p className="space-y-4">
                Glory be to the One Who took His servant ˹Muḥammad˺ by night
                from the Sacred Mosque to the Farthest Mosque whose surroundings
                We have blessed, so that We may show him some of Our signs. 1
                Indeed, He 2 alone is the All-Hearing, All-Seeing.
              </p>
              <CardFooter className="p-0">
                <Link href="#" className="hover:text-muted active:text-muted">
                  Read More
                </Link>
              </CardFooter>
            </CardContent>
          </Card>
      </div>
    </aside>
  );
};

export default RightSidebar;
