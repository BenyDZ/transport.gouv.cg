import SideInfo from "@/components/sideInfo";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const CarouselComponent = dynamic(() => import("@/components/caroussel"), {
  ssr: false,
});
const CardComponent = dynamic(() => import("@/components/card-group"), {
  ssr: false,
});

export default function Home() {
  return (
    <section className="w-full flex flex-col">
      <CarouselComponent />
      <div className="flex flex-col lg:flex-row p-10 lg:px-20 gap-10">
        <Suspense fallback={<CarouselComponent />}>
          <CardComponent />
        </Suspense>

        <SideInfo />
      </div>
    </section>
  );
}
