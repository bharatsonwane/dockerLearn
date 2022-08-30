## create network
* docker network create goals-net

## database (mongo)
* docker run --name mongocontainer -v data:/data/db --rm -d --network goals-net -e MONGO_INITDB_ROOT_USRNAME=max -e MONGO_INIT_PASSWORD=secret mongo

## nodejs application 
* docker build -t goals-node ./backend
* docker run --name goals-backend -v "E:\bharatProject\dockerLearn\05-multiContainer\backend:/app" -v logs:/app/logs -v /app/node_modules -e MONGODB_USERNAME=max -d --rm -p 30451:80 --network goals-net goals-node

## react application
* docker build -t goals-react ./frontend
* docker run -v "E:\bharatProject\dockerLearn\05-multiContainer\frontend\src:/app/src" --name goals-frontend --rm -d -p 3045:3000 -it goals-react


