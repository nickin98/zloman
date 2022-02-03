Создание БД
sudo su - postgres
psql
postgres=# CREATE DATABASE online_store;
postgres=# GRANT ALL PRIVILEGES ON DATABASE online_store to admin;