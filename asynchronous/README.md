非同期通信の例です｡

# 構成

```
Client <-    Http    -> Nginx 
       <- JavaScript -> Flask <- sqlalchemy -> PosgreSQL
```

# つまづいたこと

## Uncaught ReferenceError: exports is not defined

修正中｡