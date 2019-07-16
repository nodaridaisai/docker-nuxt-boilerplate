# Docker-Nuxt-Boilerplate

野田地区理大祭で使用している Nuxt.js 開発環境&ボイラープレートです。

## 概要
- Nuxt.js の開発環境がセットになっています
- 開発には Docker を利用します
- 各ページ head を簡単に作成するために `utils/makeHead` ユーティリティ関数を同梱しています
- Bootstrap の機能のうち、Reboot と Grid のみ標準で import しています
    - 必要に応じて import できますが、Reboot と Grid 以外は独自実装する前提です

## 必要なもの
- (Git)
- Node.js
- Yarn
- Docker

## 各種コマンド

``` bash
# ソースフォルダへ移動
$ cd src/

# Docker 起動
$ yarn docker

# 依存関係をインストール
$ yarn docker-yarn-install

# 開発サーバーを起動(http://localhost:3000/ でアクセス可能)
$ yarn docker-dev
# 開発サーバーは Ctrl-C で終了できます

# 本番サーバーに公開(デプロイコマンドは本プロジェクトに含まれていませんので、実装が必要です)
$ yarn docker-deploy

# Docker 終了(開発を一旦中断するときに実行)
$ yarn docker-stop

# 以下、おまけ
## build for production and launch server
$ yarn build
$ yarn start

## generate static project
$ yarn generate
```

## 諸注意
本プロジェクトはあくまで野田地区理大祭内部で利用することを想定しています。そのため、ドキュメントは不十分であり、また、必要なセットアップ方法は理大祭内部 Wiki でのみ管理しています。

-----

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
