import Header from "@/app/components/Header";
import HomePage from "@/app/components/HomePage";
// import Image from "next/image";
import { Suspense } from "react";
import Spinner from "@/app/components/Spinner";

export default function Home() {
  return (
    <div>
      <Suspense
        className="flex justify-center items-center"
        fallback={<Spinner />}
      >
        <HomePage />
      </Suspense>
    </div>
  );
}
