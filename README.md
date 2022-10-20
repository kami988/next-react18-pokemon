## docker 設定

`.env`ファイルを直下に作成し、に環境変数を設定

```bash
GITHUB_USER_NAME=xxx
GITHUB_TOKEN=xxx
GITHUB_EMAIL=xxx
```

`make up`を実行すると、コンテナが立ち上がります。コンテナ内では`/repo`にソースコードがフェッチされます。

## 実行

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3010](http://localhost:3010) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3010/api/hello](http://localhost:3010/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.
