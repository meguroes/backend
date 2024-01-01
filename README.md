# `backend`

## Setup

プロジェクトのルートに `.den.vars` を作成し、以下を記述してください。

```
WEB_LOCAL_URL=http://localhost:3000
WEB_PROD_URL=https://meguro.es
CONTENTFUL_SPACE_ID=XXXX
CONTENTFUL_ACCESS_TOKEN=XXXX
```

`CONTENTFUL_SPACE_ID` と `CONTENTFUL_ACCESS_TOKEN` は、値を管理者から受け取って置き換えてください。

## Quick Start

```
npm ci .
npm run dev
```

```
npm run deploy
```

## Release Flow

Actions の [Continuous Delivery ワークフロー](https://github.com/meguroes/backend/actions/workflows/continuous_delivery.yaml) から、 `Run Workflow` ボタンを押下します。

![スクリーンショット 2023-12-28 午後7 41 04](https://github.com/meguroes/next.meguro.es/assets/38882716/d8c5fc73-9dd7-4323-8714-54621267cde0)

ブランチを `main` にセットし、ポップアップ内の `Run Workflow` を押下すると Cloudflare Workers にデプロイされます。

![スクリーンショット 2023-12-28 午後7 41 13](https://github.com/meguroes/next.meguro.es/assets/38882716/c695f8a9-5536-4eb0-8ca5-3909623ce6e6)
