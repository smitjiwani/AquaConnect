#!/bin/sh

# compose the containers from the docker-compose.yml file
# use --build flag if you make changes to docker or server related files to rebuild

# create db schema
# docker exec -it server npx knex migrate:latest --knexfile db/knexfile.cjs 

docker compose up -d --build
sleep 2
docker exec -it server npm run migrate
docker exec -it server npm run seed
# fill db schema with sample data
