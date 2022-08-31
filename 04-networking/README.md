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
* docker run -d -v mongoData4:/data/db --network favorites-net --name mongodbContainer4 mongo


* docker build -t favorites-node .
* docker run -d --rm -p 3044:3000 --network favorites-net --name favorites favorites-node



### POST request
* localhost:3044/favorites
{
    "type": "movie",
    "name": "testMovie1",
    "url": "www.google.com"
}