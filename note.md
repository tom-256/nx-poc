

ビルド
```sh
nx run server-a:build
nx build server-a
```

docker build時に使う
https://nx.dev/workspace/run-commands-executor

アプリケーション
```sh
# 追加
nx g @nrwl/express:application server-a
# 削除
nx g @nrwl/workspace:remove server-a
```

ライブラリ
```sh
# 追加
nx g @nrwl/workspace:lib my-lib
# 削除
nx g @nrwl/workspace:remove my-lib
```



```sh
nx g @nrwl/workspace:remove --help
nx g @nrwl/express:lib --help
```

テスト実行
```sh
 nx affected:test

 >  NX   Affected criteria defaulted to --base=main --head=HEAD


    ✔  nx run my-lib:test  [existing outputs match the cache, left as is]
    ✔  nx run server-b:test (2s) <- #atuhを使っているserver-bのテストが走る
    ✔  nx run auth:test (6s)
```


アプリケーション起動
```sh
# 単体
nx serve server-a
# 複数
nx run-many --target=serve --projects=server-a,server-b --parallel
```

with Docker
https://blog.nrwl.io/nx-and-node-microservices-b6df3cd1bad6

https://github.com/nrwl/node-microservices
nx deploy


docker buildのコマンドを追加する

project.jsonに追記する
```json
    "build-docker": {
      "executor": "@nrwl/workspace:run-commands",
      "options": {
        "commands": [
          "nx build server-a",
          "docker buildx build -f ./apps/server-a/Dockerfile . -t tom256:server-a --load"
        ],
        "parallel": false
      }
    },
```
nrwl/node:buildに下記オプション追加
```json
    "build": {
      "executor": "@nrwl/node:build",
      "options": {
        "generatePackageJson": true
      },
```

用語
workspace...Gitリポジトリ
project...各アプリケーション
lib...ライブラリ
plugin
builder
executor
