"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const navLinks = [
    { href: "/login", label: "Login" },
    { href: "/register", label: "Register" },
  ];

  const pathname = usePathname();

  return (
    <div>
      <nav>
        <ul>
          {navLinks.map((link) => {
            // const isActive = pathname === link.href;
            const isActive = pathname.startsWith(link.href);
          return(
            <li key={link.href}>
              <Link href={link.href} className={isActive ? "font-bold mr-4":"text-blue-500 mr-4"}>{link.label}</Link>
            </li>
          )})}
        </ul>
      </nav>
      {children}
      <h1>Product Detail</h1>
    </div>
  );
};

export default AuthLayout;
