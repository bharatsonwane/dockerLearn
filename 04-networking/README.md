# Network

## Request from container to WWWW
* Conatiner can connect directly

## Request from container to host machine
* use *host.docker.internal* as address

## Request from container to other container
* create container network
* use *CONTAINER_NAME* as address


### favorites app
* docker network create favorites-net
* docker run -d --name mongodbContainer --network favorites-net mongo


* docker build -t favorites-node .
* docker run --name favorites --network favorites-net -d --rm -p 3000:3000  favorites-node

