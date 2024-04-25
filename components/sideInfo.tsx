import { sideInfo } from "@/constants";
import Link from "next/link";

const SideInfo = () => {
  return (
    <div className="lg:w-[30%]">
      <div className="flex flex-col gap-3 ">
        <div className="flex justify-between">
          <h2 className="font-bold">Evenements</h2>
          <h3 className="text-green-400 hover:text-green-500">
            <Link href="#">Voir plus</Link>
          </h3>
        </div>
        <div className="w-full flex">
          <hr className="border-green-400 w-full" />
          <hr className="border-secondary w-full" />
        </div>
      </div>
      <div>
        {sideInfo.map((item, index) => {
          return (
            <div
              className="border-b-2 border-[#E6E6E6] py-5 flex flex-col gap-3"
              key={index}
            >
              <p>{item.label}</p>
              <div className="flex flex-row justify-between">
                <p>{item.date}</p>
                <Link
                  href={item.link}
                  className="text-green-400 hover:text-green-500"
                >
                  Lire plus
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SideInfo;
