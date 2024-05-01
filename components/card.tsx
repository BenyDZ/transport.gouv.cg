import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";

export function CardComponent({
  link,
  src,
  label,
  title,
}: {
  link: string;
  src: string;
  label: string;
  title: string;
}) {
  return (
    <Card className="rounded-t-lg">
      <CardHeader className="p-0 pb-6">
        <a href={link} className="relative h-full w-full rounded-t-lg">
          <Image
            src={src}
            className="block w-full h-full rounded-t-lg"
            alt={label}
            width={0}
            height={0}
            sizes="100vw"
          />
          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
        </a>
      </CardHeader>
      <CardContent>
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
      </CardContent>
    </Card>
  );
}
