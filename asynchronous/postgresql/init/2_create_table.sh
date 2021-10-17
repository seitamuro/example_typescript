#!/bin/bash
psql -U postgres -d asynchronous_tutorial << "EOSQL"
CREATE TABLE users(
    id SERIAL NOT NULL,
    name VARCHAR(200),
    text VARCHAR(2000),
    created_at TIMESTAMP WITHOUT TIME ZONE NOT NULL,
    updated_at TIMESTAMP WITHOUT TIME ZONE NOT NULL,
    PRIMARY KEY (id)
);
EOSQL