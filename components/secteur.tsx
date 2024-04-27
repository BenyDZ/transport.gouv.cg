import { secteurItems } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Secteur = () => {
  return (
    <div className="p-10 lg:px-20">
      <div className="flex flex-col gap-3 ">
        <h2 className="font-bold">Nos Secteurs</h2>
        <div className="w-full flex">
          <hr className="border-green-400 w-full" />
          <hr className="border-secondary w-full" />
        </div>
      </div>
      <div className="p-10 w-full flex flex-col divide-y-2 md:flex-row md:divide-y-0 justify-around items-center bg-[#F8F8F8] mt-5 md:divide-x-2">
        {secteurItems.map((item, index) => {
          return (
            <div
              key={index}
              className="w-full h-full flex flex-col justify-center items-center py-7"
            >
              <Link
                href={item.link}
                className="flex flex-col items-center justify-center"
              >
                <Image
                  src={item.iconSrc}
                  alt={item.label}
                  width={32}
                  height={32}
                />
                <p className="mt-5 text-[#3F5168]">{item.label}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Secteur;
