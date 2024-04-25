"use client";

import Link from "next/link";

const Button = ({ text }: { text: string }) => {
  return (
    <Link
      href="#"
      className="inline-block rounded bg-primary/60 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-secondary shadow-sm transition duration-150 ease-in-out hover:bg-primary/80 hover:shadow-md focus:bg-primary focus:shadow-lg focus:outline-none hover:ring-2 ring-primary ring-offset-2 active:bg-primary active:shadow-lg motion-reduce:transition-none"
    >
      {text}
    </Link>
  );
};

export default Button;
