# PostgreSQLのコマンド

## CREATE TABLE

テーブルは以下の構文で生成することができる｡

```sql
CREATE TABLE [IF NOT EXISTS] table_name (
    column1 datatype(length) column_contraint,
    column2 datatype(length) column_contraint,
    column3 datatype(length) column_contraint,
    :
    :
    :
);
```

datatypeで利用できるのは主に以下の型([詳細](https://www.postgresql.org/docs/9.5/datatype.html))｡

|データ名|略称|説明|
|----|----|----|
|bigint|int8|符号付き8ビット整数|
|bigserial|serial8|自動的に割り振られる8ビット整数|
|boolean|bool|論理値|
|character[(n)]|char[(n)]|固定長文字|
|character varying[(n)]|varchar[(n)]|可変長文字列|
|time [(p)] with time zone|timez|タイムゾーン付き日時|
|timestamp with time zone|timestamptz|タイムゾーン付きタイムスタンプ|

contraintに指定できるのは以下の項目｡

|名前|詳細|
|----|----|
|NOT NULL|値がNULLでない|
|UNIQUE|同じカラムに同じ値が存在しない|
|PRIMARY KEY|テーブルでデータを特定するための値として利用する|
|CHECK|データが条件式を満たすことが保証されている|
|FOREIGN KEY|他のテーブルのカラムを利用する|

シンプルな例

```sql
CREATE TABLE accounts (
	user_id serial PRIMARY KEY,
	username VARCHAR ( 50 ) UNIQUE NOT NULL,
	password VARCHAR ( 50 ) NOT NULL,
	email VARCHAR ( 255 ) UNIQUE NOT NULL,
	created_on TIMESTAMP NOT NULL,
    last_login TIMESTAMP 
);
```

外部キーを利用する例

```sql
CREATE TABLE roles(
   role_id serial PRIMARY KEY,
   role_name VARCHAR (255) UNIQUE NOT NULL
);

CREATE TABLE account_roles (
  user_id INT NOT NULL,
  role_id INT NOT NULL,
  grant_date TIMESTAMP,
  PRIMARY KEY (user_id, role_id),
  FOREIGN KEY (role_id)
      REFERENCES roles (role_id),
  FOREIGN KEY (user_id)
      REFERENCES accounts (user_id)
);
```