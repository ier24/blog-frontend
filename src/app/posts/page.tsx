import Link from "next/link";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import utilsStyle from "../utils.module.css";
import layoutStyle from "../layout.module.css";

export default function Page() {
  const markdown = `
  # こんにちは、世界！

  これは**マークダウン**のサンプルテキストです。

  - リスト項目1
  - リスト項目2
  - リスト項目3

  [ここ](http://example.com)をクリックしてウェブサイトを訪問してください。
  `;

  return (
    <div className={layoutStyle.container}>
      <article>
        <h1 className={utilsStyle.headingXl}>タイトル</h1>
      </article>
      <ReactMarkdown
        rehypePlugins={[rehypeRaw, rehypeSanitize]}
        components={
          {
            /* ... */
          }
        }
      >
        {markdown}
      </ReactMarkdown>
      <Link href="/profile">Profile</Link>
      <br />
      <Link href="/">← Homeに戻る</Link>
    </div>
  );
}
