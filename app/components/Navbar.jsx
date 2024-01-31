"use client";

import { navLinks } from "@/public/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div>
      <ul className="flex items-center justify-center gap-5 font-medium">
        {navLinks.map((navLink) => (
          <li key={navLink.id}>
            <Link
              href={navLink.path}
              className={`${
                pathname === navLink.path && "text-primary italic font-bold"
              }`}
            >
              {navLink.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
