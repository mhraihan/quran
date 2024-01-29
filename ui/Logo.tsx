import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Button
      size={"logo"}
      asChild
    >
      <Link href={"/"}>
        <Image
          src="/quran.svg"
          alt="Quran Logo"
          className="dark:invert"
          width={32}
          height={32}
          priority
        />
      </Link>
    </Button>
  );
};

export default Logo;
