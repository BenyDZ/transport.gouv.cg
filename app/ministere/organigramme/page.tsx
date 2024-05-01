import CardWrapper from "@/components/cardWrapper";
import { CardsSkeleton } from "@/components/skeletons";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import { Suspense } from "react";

const page = () => {
  return (
    <Card className="lg:w-[75%] mt-5">
      <CardHeader>
        <div className="flex flex-col gap-3 mb-5">
          <div className="flex justify-between">
            <h2 className="font-bold">Actualité</h2>
            <h3 className="text-green-400 hover:text-green-500">
              <Link href="#">Voir plus</Link>
            </h3>
          </div>
          <div className="w-full flex">
            <hr className="border-green-400 w-full" />
            <hr className="border-secondary w-full" />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </CardContent>
    </Card>
  );
};

export default page;
