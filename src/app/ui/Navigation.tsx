"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

interface NavLink {
  href: string;
  name: string;
}

interface NavigationProps {
  navLinks: NavLink[];
}

export function Navigation({ navLinks }: NavigationProps) {
  /**
   * リンクがアクティブかどうかを確認する
   */
  const pathname: string = usePathname();

  return (
    <>
      {navLinks.map((link: NavLink) => {
        const isActive: boolean = pathname === link.href;
        return (
          <Link
            className={isActive ? "text-blue" : "text-black"}
            href={link.href}
            key={link.name}
          >
            {link.name}
          </Link>
        );
      })}
    </>
  );
}
