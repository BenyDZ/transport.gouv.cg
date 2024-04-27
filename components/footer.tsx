"use client";

import { footerItems, ministereLinks, socialMedial } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  return (
    <div className="w-full bg-[#151821] p-10 py-20 lg:px-20 space-y-12">
      <div className="grid grid-cols-1 gap-20 md:grid-cols-2 md:gap-10 lg:flex lg:justify-between lg:items-center">
        <div className="text-white flex flex-col items-center gap-5">
          <Image
            src="/Images/logo.png"
            className=""
            alt="hero view image"
            width={250}
            height={250}
            sizes="100vw"
          />
          <p className="font-extrabold">M.T.A.C.M.M</p>
        </div>
        <div className="text-white flex flex-col gap-5">
          <h3>Ministere</h3>
          <hr className="w-[100px] border-white" />
          {ministereLinks.map((link, index) => {
            const isAcive =
              pathname === link.route || pathname.startsWith("${link.route}/");
            return (
              <Link
                href={link.route}
                key={index}
                className={cn("whitespace-nowrap group hover:text-green-500", {
                  "text-green-400": isAcive,
                })}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        <div className="text-white flex flex-col gap-5">
          <h3>Liens utiles</h3>
          <hr className="w-[100px] border-white" />
          {ministereLinks.map((link, index) => {
            const isAcive =
              pathname === link.route || pathname.startsWith("${link.route}/");
            return (
              <Link
                href={link.route}
                key={index}
                className={cn("whitespace-nowrap group hover:text-green-500", {
                  "text-green-400": isAcive,
                })}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        <div className="text-white flex flex-col gap-5">
          <h3>Nos contacts</h3>
          <hr className="w-[100px] border-white" />
          {footerItems.map((item, index) => {
            if (index == 3) {
              return (
                <div key={index} className="flex gap-10 items-center">
                  <Image src={item.iconSrc} alt="icon" width={20} height={20} />
                  <Link
                    href={item.link}
                    className="text-green-400 hover:text-green-500"
                  >
                    {item.label}
                  </Link>
                </div>
              );
            } else {
              return (
                <div key={index} className="flex gap-10 items-center">
                  <Image src={item.iconSrc} alt="icon" width={20} height={20} />
                  <p>{item.label}</p>
                </div>
              );
            }
          })}
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <div className="w-full flex">
          <hr className="border-green-400 w-full" />
          <hr className="border-white w-full" />
        </div>
        {/* copyright and social media */}
        <div className="text-white space-y-7 md:flex md:flex-row md:space-y-0 md:justify-between">
          {/* copyright */}
          <div className="flex gap-10 items-center justify-center">
            <Image
              src="/Images/copyright-regular 1.png"
              alt="copyright image"
              width={32}
              height={32}
            />
            <p>2024 Tous droits reservés</p>
          </div>
          {/* social media */}
          <div className="flex gap-5 justify-center">
            {socialMedial.map((item, index) => {
              if (index == 0) {
                return (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    width="35px"
                    height="35px"
                    key={index}
                    className="fill-green-400 hover:fill-green-500"
                  >
                    <path d={item.iconSrc} />
                  </svg>
                );
              } else {
                return (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    width="30px"
                    height="30px"
                    key={index}
                    className="fill-green-400 hover:fill-green-500"
                  >
                    <path d={item.iconSrc} />
                  </svg>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
