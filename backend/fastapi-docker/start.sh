#!/bin/bash
image="fastapi-docker-img"
container="fastapi"
docker build --tag ${image} .
docker run -d --name ${container} -p 80:80 ${image}