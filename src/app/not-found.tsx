import Link from "next/link";
import layoutStyle from "./layout.module.css";

export default function NotFound() {
  return (
    <div className={layoutStyle.container}>
      <h2>404 - Not Found</h2>
      <p>ページが見つかりませんでした。</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
