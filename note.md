

ビルド
```
nx run todos:build
```


ライブラリ
```
# 追加
nx g @nrwl/workspace:lib my-lib
# 削除
nx g rm @nrwl/workspace:remove my-lib
```



```
nx g @nrwl/workspace:remove --help
nx g @nrwl/express:lib --help
```


```
 nx affected:test

 >  NX   Affected criteria defaulted to --base=main --head=HEAD


    ✔  nx run my-lib:test  [existing outputs match the cache, left as is]
    ✔  nx run server-b:test (2s)
    ✔  nx run auth:test (6s)
```
