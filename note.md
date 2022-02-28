

ビルド
```sh
nx run todos:build
```

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