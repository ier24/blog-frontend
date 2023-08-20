"use client";

import { useRouter } from "next/navigation";
import layoutStyle from "../layout.module.css";

export default function Page() {
  const router = useRouter();

  return (
    <div className="bg-white py-24 sm:py-32 container mx-auto px-4 max-w-xl mb-24 font-sans">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
            This is Sample Page!!
          </h2>
        </div>
      </div>
    </div>
  );
}
