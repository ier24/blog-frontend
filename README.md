## 個人ブログサイト

ReactとNext.jsを用いた個人ブログサイト（になる予定）。フロントエンドのお勉強を兼ねている。どうせ最初からなので、Next.js13.4から安定版がリリースされた[AppRouter](https://nextjs.org/blog/next-13-4)を利用してみる。

## プロジェクト立ち上げ時の設定

```zsh
npx create-next-app@latest
✔ What is your project named? … blog-frontend
✔ Would you like to use TypeScript? … Yes
✔ Would you like to use ESLint? … Yes
✔ Would you like to use Tailwind CSS? … Yes
✔ Would you like to use `src/` directory? … Yes
✔ Would you like to use App Router? (recommended) … Yes
✔ Would you like to customize the default import alias? … No
Creating a new Next.js app in /Users/ryoma/VSCode/blog-frontend
```

## Memo

開発メモ。READMEに書く内容でも無い気がするのでどこかで移動する。

### ESLint

静的検証を実行する場合は、`npm run lint`を実行する。初めてESLintを設定する開発者に推奨される設定（`"extends": "next/core-web-vitals"`）を利用。

- https://nextjs.org/docs/app/building-your-application/configuring/eslint
- https://nextjs.org/docs/app/building-your-application/configuring/eslint#eslint-plugin
- https://nextjs.org/docs/app/building-your-application/configuring/eslint#core-web-vitals
- https://eslint.org/
- https://web.dev/vitals/

### husky

`npx husky-init && npm install`を実行すると、`.husky`関連ファイルが生成されて、`package.json`に`husky`の設定が追加される。

`npx husky add .husky/{git_hook_name} '{commnads}'`で特定のGitフック時に自動実行したいコマンドに追加する（pre-commit）。

- https://typicode.github.io/husky/getting-started.html
- https://github.com/typicode/husky
  - こっちのほうが端的かも。

### lint-staged

`npm i -D lint-staged`でインストール。

- https://www.npmjs.com/package/lint-staged
- https://zenn.dev/risu729/articles/latest-husky-lint-staged (2023/04時点の情報)
