# Rails Girls Gathering Japan 公式サイト
[Gatsby](https://www.gatsbyjs.com/)を使って構築しています。

## セットアップ
### 前提条件
yarnがインストールされている必要があります。

### 設定ファイルの作成
10周年記念ツイートのデータ収集をFirebase Realtime Databaseを使って行っているため、関連する設定情報を用意する必要があります。

[Scrapbox](https://scrapbox.io/rails-girls-gathering/%E5%85%AC%E5%BC%8F%E3%82%B5%E3%82%A4%E3%83%88dotenv%E3%81%AE%E6%83%85%E5%A0%B1)の環境設定手順に沿って、このファイルがある場所と同じディレクトリに.envという名前のファイルを作成してください。

### インストール
ルートディレクトリ(このファイルがあるディレクトリ)で以下のコマンドを実行してください。

```sh
$ yarn install
$ yarn start
```

ブラウザで `http://localhost:8000` を開き、トップページが表示されればOKです。

2回目以降は、`yarn start`のみを実行すればプレビューを開始出来ます。
