"use client";

import { cardImages } from "@/constants";
import { useEffect } from "react";

const CardWrapper = () => {
  useEffect(() => {
    const init = async () => {
      const { Card, initTWE } = await import("tw-elements");
      initTWE({ Card });
    };
    init();
  }, []);
  return (
    <div className="grid-cols-1 sm:grid md:grid-cols-2 gap-10">
      {cardImages.map((imag, index) => {
        return (
          <Card
            title={imag.title}
            src={imag.src}
            label={imag.label}
            link={imag.link}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default CardWrapper;

export function Card({
  link,
  src,
  label,
  title,
}: {
  title: string;
  src: string;
  link: string;
  label: string;
}) {
  return (
    <div className="mt-6 flex flex-col rounded-lg bg-[#F8F8F8] text-surface shadow-md dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0 relative">
      <a href={link} className="relative">
        <img className="rounded-t-lg" src={src} alt={label} />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
      </a>
      <div className="p-6 text-black">
        <h5 className="mb-2 text-xl font-medium leading-tight">{title}</h5>
        <hr className="border-secondary w-[40%] my-5" />
        <p className="mb-4 text-base">
          This is a longer card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer. This is a
          longer card with supporting text below as a natural lead-in to
          additional content. This content is a little bit longer.This is a
          longer card with supporting text below as a natural lead-in to
          additional content. This content is a little bit longer.
        </p>
      </div>
    </div>
  );
}
