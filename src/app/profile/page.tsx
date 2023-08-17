import Link from "next/link";
import layoutStyle from "../layout.module.css";

export default function Page() {
  return (
    <div className={layoutStyle.container}>
      <h1>This is Profile Page!</h1>
      <Link href="/">← Homeに戻る</Link>
    </div>
  );
}
