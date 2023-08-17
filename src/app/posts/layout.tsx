import { ReactNode } from "react";

export default function PostsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col justify-center items-center max-w-2xl mx-auto px-4">
      <main className="flex flex-col justify-center items-center w-full flex-1 px-20 text-center">
        {children}
      </main>
    </div>
  );
}
