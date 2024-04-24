"use client";

import { Transition } from "@headlessui/react";
import { useEffect, useRef, useState } from "react";
{
  /* ... image imports ... */
}

export default function ProgressSlider() {
  const duration: number = 5000;
  const itemsRef = useRef<HTMLDivElement>(null);
  const frame = useRef<number>(0);
  const firstFrameTime = useRef(performance.now());
  const [active, setActive] = useState<number>(0);

  useEffect(() => {
    firstFrameTime.current = performance.now();
    frame.current = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(frame.current);
    };
  }, [active]);

  const animate = (now: number) => {
    let timeFraction = (now - firstFrameTime.current) / duration;
    if (timeFraction <= 1) {
      frame.current = requestAnimationFrame(animate);
    } else {
      timeFraction = 1;
      setActive((active + 1) % 4);
    }
  };

  const heightFix = () => {
    if (itemsRef.current && itemsRef.current.parentElement)
      itemsRef.current.parentElement.style.height = `${itemsRef.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();
  }, []);

  return (
    <div className="w-full text-center h-[90vh]">
      {/* Item image */}
      <div className="w-full h-[90vh] relative">
        {Array.from({ length: 5 }).map((_, index) => (
          <Transition
            key={index}
            show={active === index}
            enter="transition ease-in-out duration-500 delay-200 order-first"
            enterFrom="opacity-0 scale-80"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in-out duration-300 absolute"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
            beforeEnter={() => heightFix()}
          >
            <div className="bg-[url('/Images/hero1.png')] bg-cover bg-no-repeat h-[90vh] w-full">
              <p>test {index}</p>
            </div>
          </Transition>
        ))}
      </div>
      {/* <div className="relative flex flex-col" ref={itemsRef}>
          <Transition
            key={0}
            show={active === 0}
            enter="transition ease-in-out duration-500 delay-200 order-first"
            enterFrom="opacity-0 scale-105"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in-out duration-300 absolute"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
            beforeEnter={() => heightFix()}
          >
            <Image
              className="w-full h-screen"
              src="/Images/hero1.png"
              width={1024}
              height={576}
              alt="test"
            />
          </Transition>
          <Transition
            key={1}
            show={active === 1}
            enter="transition ease-in-out duration-500 delay-200 order-first"
            enterFrom="opacity-0 scale-105"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in-out duration-300 absolute"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
            beforeEnter={() => heightFix()}
          >
            <Image
              className="rounded-xl"
              src="/Images/hero2.png"
              width={1024}
              height={576}
              alt="test"
            />
          </Transition>
          <Transition
            key={2}
            show={active === 2}
            enter="transition ease-in-out duration-500 delay-200 order-first"
            enterFrom="opacity-0 scale-105"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in-out duration-300 absolute"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
            beforeEnter={() => heightFix()}
          >
            <Image
              className="rounded-xl"
              src="/Images/hero3.png"
              width={1024}
              height={576}
              alt="test"
            />
          </Transition>
          <Transition
            key={3}
            show={active === 3}
            enter="transition ease-in-out duration-500 delay-200 order-first"
            enterFrom="opacity-0 scale-105"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in-out duration-300 absolute"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
            beforeEnter={() => heightFix()}
          >
            <Image
              className="rounded-xl"
              src="/Images/hero4.png"
              width={1024}
              height={576}
              alt="test"
            />
          </Transition>
        </div> */}
      {/* Buttons */}
      {/* <div className="max-w-xs sm:max-w-sm md:max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        {items.map((item, index) => (
          <button
            key={index}
            className="p-2 rounded focus:outline-none focus-visible:ring focus-visible:ring-indigo-300 group"
            onClick={() => {
              setActive(index);
            }}
          >
            <span
              className={`text-center flex flex-col items-center ${
                active === index
                  ? ""
                  : "opacity-50 group-hover:opacity-100 group-focus:opacity-100 transition-opacity"
              }`}
            >
              <span className="flex items-center justify-center relative w-9 h-9 rounded-full bg-indigo-100 mb-2">
                <Image src={item.buttonIcon} alt={item.desc} />
              </span>
              <span className="block text-sm font-medium text-slate-900 mb-2">
                {item.desc}
              </span>
              <span
                className="block relative w-full bg-slate-200 h-1 rounded-full"
                role="progressbar"
                aria-valuenow={0}
              >
                <span
                  className="absolute inset-0 bg-indigo-500 rounded-[inherit]"
                  style={{ width: "0%" }}
                ></span>
              </span>
            </span>
          </button>
        ))}
      </div> */}
    </div>
  );
}
