import Navbar from "@/components/navbar";
import { ReactNode } from "react";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="relative">
      <Navbar />
      <section className="w-full">{children}</section>
    </main>
  );
};

export default HomeLayout;
