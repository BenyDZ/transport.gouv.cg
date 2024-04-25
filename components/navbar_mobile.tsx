import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ministereLinks, sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";

const Navbar_mobile = () => {
  const pathname = usePathname();
  return (
    <section className="w-full">
      {/* for the hamburger trigger button, component from shadcn */}
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src="/icons/hamburger.svg"
            width={70}
            height={70}
            alt="hamburger icon"
            className="cursor-pointer md:hidden"
          />
        </SheetTrigger>
        <SheetContent
          className="flex flex-col gap-10 border-none bg-white max-w-96 md:hidden"
          side="right"
        >
          <Link href="/" className="flex items-center justify-between px-4">
            <Image
              src="/images/logo.png"
              width={"60"}
              height={"60"}
              alt="AfricanWhiz-Tech Logo"
              className="max-sm:size-30"
            />

            <p className="font-extrabold">MTACMM</p>
          </Link>

          <div className="flex h-[calc1(100vh-72px)] flex-col justify-between overflow-y-auto">
            {/* all links inside will automaticaly close the menu after click */}
            <SheetClose asChild>
              <section className="flex h-full flex-col gap-5 pt-26">
                {sidebarLinks.map((link, index) => {
                  const isAcive =
                    pathname === link.route ||
                    pathname.startsWith("${link.route}/");

                  if (link == sidebarLinks[1]) {
                    return (
                      <Collapsible className="w-full" key={index}>
                        <CollapsibleTrigger className="w-full" asChild>
                          <Link
                            href=""
                            key={link.label}
                            className={cn(
                              "flex gap-4 items-center p-4 w-full max-w-60 hover:text-green-500 border-b-2 border-silver rounded-none",
                              { "text-green-400": isAcive }
                            )}
                          >
                            <p className="font-semibold">{link.label}</p>
                          </Link>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          {ministereLinks.map((mLink) => {
                            const isAcive =
                              pathname === mLink.route ||
                              pathname.startsWith("${link.route}/");
                            return (
                              <div
                                className="flex flex-col gap-1 py-2 ml-6 "
                                key={index}
                              >
                                <Link
                                  href={mLink.route}
                                  key={mLink.label}
                                  className={cn(
                                    "whitespace-nowrap group hover:text-green-500",
                                    {
                                      "text-green-400": isAcive,
                                    }
                                  )}
                                >
                                  <p className="text-sm font-normal md:text-xs">
                                    {mLink.label}
                                  </p>
                                </Link>
                              </div>
                            );
                          })}
                        </CollapsibleContent>
                      </Collapsible>
                    );
                  } else {
                    return (
                      // to close after clicking
                      <SheetClose asChild key={link.route}>
                        <Link
                          href={link.route}
                          key={link.label}
                          className={cn(
                            "flex gap-4 items-center p-4 w-full max-w-60 hover:text-green-500 border-b-2 border-silver rounded-none",
                            { "text-green-400": isAcive }
                          )}
                        >
                          <p className="font-semibold">{link.label}</p>
                        </Link>
                      </SheetClose>
                    );
                  }
                })}
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default Navbar_mobile;
