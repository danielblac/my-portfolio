"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    setTimeout(() => {
      setIsOpen(false);
    }, 20000);
  }, [isOpen]);

  return (
    <>
      <header className="flex flex-col px-4 py-4 lg:px-0 items-center md:flex-row lg:pb-6 lg:mx-auto lg:w-[90%]">
        <div className="flex w-full justify-between items-center">
          <div
            className="flex gap-3 items-center cursor-pointer"
            onClick={() => router.push("/")}
          >
            <Image
              src="/image/my_logo.png"
              alt="logo"
              width={130}
              height={150}
              className="w-12 lg:w-20"
            />
            <p className="font-champ text-primary text-xl sm:text-2xl lg:mt-2 tracking-wide">
              Danielblac Devhub
            </p>
          </div>
          <div
            className="cursor-pointer lg:hidden lg:absolute"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>
        <nav
          className={`${
            isOpen ? "flex" : "hidden"
          } text-sm sm:text-md pt-4 w-full justify-around lg:flex md:text-lg lg:justify-between lg:text-xl xxl:text-2xl`}
        >
          <Link
            href="/"
            className={`${
              pathname === "/"
                ? "border-r-3 border-primary md:text-secondary-200 border-design-200 pr-2 md:border-none md:bg-primary md:rounded-md md:px-4 md:pb-2.5 md:pt-1.5"
                : ""
            }`}
          >
            <div className="flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7 sm:w-9 sm:h-9 md:hidden"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              <p className="lg:py-1 lg:px-2">Home</p>
            </div>
          </Link>
          <Link
            href="/projects"
            className={`${
              pathname === "/projects"
                ? "border-r-3 border-primary md:text-secondary-200 border-design-200 pr-2 md:border-none md:bg-primary md:rounded-md md:px-4 md:pb-2.5 md:pt-1.5"
                : ""
            }`}
          >
            <div className="flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7 sm:w-9 sm:h-9 md:hidden"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                />
              </svg>
              <p className="lg:py-1 lg:px-2">Projects</p>
            </div>
          </Link>
          <Link
            href="/contact"
            className={`${
              pathname === "/contact"
                ? "border-r-3 border-primary md:text-secondary-200 border-design-200 pr-2 md:border-none md:bg-primary md:rounded-md md:px-4 md:pb-2.5 md:pt-1.5"
                : ""
            }`}
          >
            <div className="flex flex-col items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7 sm:w-9 sm:h-9 md:hidden"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z"
                />
              </svg>
              <p className="lg:py-1 lg:px-2">Contact</p>
            </div>
          </Link>
        </nav>
      </header>
    </>
  );
}
