"use client";

import { useRouter } from "next/navigation";
import layoutStyle from "./layout.module.css";

export default function Page() {
  const router = useRouter();

  return (
    <div className={layoutStyle.container}>
      <h1>This is Root Page!</h1>
      <button type="button" onClick={() => router.push("/")}>
        Homeに戻る
      </button>
      <br />
      <button type="button" onClick={() => router.push("/posts")}>
        投稿ページへ
      </button>
      <br />
      <button type="button" onClick={() => router.push("/profile")}>
        Profileページへ
      </button>
      <br />
      <button type="button" onClick={() => router.push("/profil")}>
        Not Found
      </button>
    </div>
  );
}
