## create network
* docker network create goals-net5

## database (mongo)
* docker run -v mongoData5:/data/db --rm -d --network goals-net5 -e MONGO_INITDB_ROOT_USRNAME=max -e MONGO_INIT_PASSWORD=secret --name mongocontainer5 mongo

## nodejs application 
* docker build -t goals-node ./backend
* docker run -v "E:\bharatProject\dockerLearn\05-multiContainer\backend:/app" -v logs:/app/logs -v /app/node_modules -e MONGODB_USERNAME=max -d --rm -p 30451:80 --network goals-net5 --name goals-backend goals-node

## react application
* docker build -t goals-react ./frontend
* docker run -v "E:\bharatProject\dockerLearn\05-multiContainer\frontend\src:/app/src" --rm -d -p 3045:3000 -it --name goals-frontend goals-react


