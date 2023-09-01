"use client";

import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  return (
    <div className="container mx-auto">
      <h1>This is Root Page!</h1>
    </div>
  );
}
