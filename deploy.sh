#!/bin/bash

docker compose down
docker image rm dreamziarahcom-dreamziarah
docker system prune
docker compose up -d
