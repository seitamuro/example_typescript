# 概要

Nginx+PostgreSQL+Flaskの構成のwebサーバーの最小構成です｡

# 使い方

1. docker-composeを起動できるようにする

docker-composeが起動できない場合があります｡このときは`setup_docker.sh`を使用します｡

2. サーバーを立ち上げる

docker-composeを利用して､NginxとPostgreSQLのサーバーを起動することができます｡


3. PostgreSQLの設定を行う

PostgreSQLで新たにデータベースを作成する場合､`localhost:5050`にアクセスし､`.env`に書いたメールアドレスとパスワードうことで､PostgreSQLのサーバーにアクセスし､作成を行うことができます｡

新たなデータベースを作成した際に､自動的に行いたい処理がある場合は`./postgresql/init`にあるようにファイル名の先頭に数字を振ったファイルを置くことで､それらを順番に実行することができます｡

4. Flaskの準備をする

pythonのモジュールである`venv`を利用して､pythonの仮想環境を作成します｡`venv`は`python -m venv [環境名]`とすることで指定した名前の環境を作成することができます｡Windowsでは`./[環境名]/Script/Activate`を実行することで､Linuxでは`source ./[環境名]/bin/activate`を実行することで仮想環境を立ち上げることができます｡仮想環境を立ち上げたあとに`pip install -r requirement.txt`を実行することでFlaskに関連したpythonのモジュールをインストールすることができます｡この内容はプロジェクトの内容によって適宜書き換える必要があります｡

`requirement.txt`の内容は`pip freeze > requirement.txt`で出力することができます｡