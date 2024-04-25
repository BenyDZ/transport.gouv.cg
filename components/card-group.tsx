"use client";

import { cardImages } from "@/constants";
import Link from "next/link";
import { useEffect } from "react";

const CardGroup = () => {
  useEffect(() => {
    const init = async () => {
      const { Card, initTWE } = await import("tw-elements");
      initTWE({ Card });
    };
    init();
  }, []);
  return (
    <div className="p-10 lg:px-32 ">
      <div className="flex flex-col gap-3 ">
        <div className="flex justify-between">
          <h2 className="font-bold">Actualité</h2>
          <h3 className="text-primary/70 hover:text-primary">
            <Link href="#">Voir plus</Link>
          </h3>
        </div>
        <div className="w-full flex f">
          <hr className="border-primary w-full" />
          <hr className="border-secondary w-full" />
        </div>
      </div>

      <div className="grid-cols-1 sm:grid md:grid-cols-2 gap-6">
        {cardImages.map((imag) => {
          return (
            <div className="mt-6 flex flex-col rounded-lg bg-[#F8F8F8] text-surface shadow-md dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0 rela">
              <a href={imag.link} className="relative">
                <img className="rounded-t-lg" src={imag.src} alt={imag.label} />
                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
              </a>
              <div className="p-6">
                <h5 className="mb-2 text-xl font-medium leading-tight">
                  {imag.title}
                </h5>
                <p className="mb-4 text-base">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardGroup;
