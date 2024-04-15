import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between w-11/12 lg:w-10/12 max-w-7xl py-5 lg:py-6 mx-auto">
      <div className="flex gap-5 items-center justify-between lg:w-8/12 text-[#1A1A1A]">
        <div className="flex items-center gap-2">
          <Image
            src="/menu.svg"
            className="lg:hidden w-5 h-5"
            width={100}
            height={100}
            alt="menu"
          />
          <Link href="/">
            <Image
              src="/lws-logo-black.svg"
              className="h-10 w-100"
              height={100}
              width={100}
              alt=""
            />
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-end gap-2 lg:gap-5 lg:w-4/12">
        <Image
          src="/avatar.svg"
          className="hidden lg:block w-[18px] h-[18px]"
          width={18}
          height={18}
          alt="login acount avatar"
        />
        <Image
          src="/shopping-Cart.svg"
          className="block w-5 h-5"
          width={18}
          height={18}
          alt="shopping cart icon"
        />
      </div>
    </nav>
  );
}
