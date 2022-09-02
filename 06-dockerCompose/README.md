# docker compose

## build images & start container
*  docker compose --env-file ./env/argumentAll.env up
<!-- -d ==> ditached mode -->
* docker compose --env-file ./env/argumentAll.env up -d
<!-- force new build images -->
* docker compose --env-file ./env/argumentAll.env up --build


## stop & remove container
* docker-compose down
<!-- -v flag remove volume -->
* docker-compose down -v