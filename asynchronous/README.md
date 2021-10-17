非同期通信の例です｡

# 構成

```
Client <-    Http    -> Nginx 
       <- JavaScript -> Flask <- sqlalchemy -> PosgreSQL
```