# Backend  

- Consist of a Cassandra database  
- Backend information processing   
- 
## Cassandra database   


Command: 
```
docker pull cassandra:latest
docker network create cassandra

docker run --rm -d --name cassandra --hostname cassandra --network cassandra cassandra

docker run --rm --network cassandra -v "$(pwd)/data.cql:/scripts/data.cql" -e CQLSH_HOST=cassandra -e CQLSH_PORT=9042 -e CQLVERSION=3.4.5 nuvo/docker-cqlsh
```

From de docker compose option 
`sudo docker-compose up -d`
