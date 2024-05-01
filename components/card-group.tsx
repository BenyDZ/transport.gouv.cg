import Link from "next/link";
import { Suspense } from "react";
import CardWrapper from "./cardWrapper";
import { CardsSkeleton } from "./skeletons";
import { Card, CardContent, CardHeader } from "./ui/card";

export default async function CardGroup() {
  return (
    <Card className="lg:w-[75%]">
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
}
