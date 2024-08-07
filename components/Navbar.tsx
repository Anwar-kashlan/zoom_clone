import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <nav className="bg-black-200 w-full fixed z-20 top-0 left-0">
      <div className="flex-between sm:px-10 px-6 py-4 ">
        <Link href="/">
          <div className="flex items-center gap-1">
            <Image
              src="/icons/logo.svg"
              alt="logo"
              width={32}
              height={32}
              className="max-sm:size-10"
            />
            <p className="max-md:hidden font-bold text-[26px] leading-6 uppercase">
              Yoom
            </p>
          </div>
        </Link>
        <div className="flex-between gap-5">
          <SignedIn>
            <UserButton />
          </SignedIn>
          <MobileNav />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;