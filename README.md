# `backend`

## Setup

wranger で `wranger.toml` を生成し、以下を追記してください。

```toml
[vars]
WEB_LOCAL_URL = "http://localhost:3000"
WEB_PROD_URL = "https://meguro.es"
CONTENTFUL_SPACE_ID = "XXXX"
CONTENTFUL_ACCESS_TOKEN = "XXX"
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
