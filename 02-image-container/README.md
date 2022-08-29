# Image & Container
# **NODE APP**
## help (image/container)
* *COMMAND* --help

## image
### image list
* docker images -a

### remove image
* docker rmi *IMAGE_NAME*

### inspect image
* docker inspect *IMAGE_NAME*

### build image
* docker build *--t IMAGE_NAME:IMAGE_VERSION* *PATH*  <!-- -t ==> ImageTag -->
* docker build -t node-demo:latest ./01-nodejs-app-finished

### tag existing image
* docker tag node-demo:latest etevabharat/node-hello-world
### push image
* docker push *HOST:NAME/IMAGE_NAME*
* docker push etevabharat/node-hello-world

### pull image
* docker pull *HOST:NAME/IMAGE_NAME*
* docker pull etevabharat/node-hello-world


<!-- ------------------------------------------------------  -->
## Container
### list container
* docker ps -a  

### run container
* docker run *port HOST_SYSTEM_PORT:CONTIANER_PORT* *-ditached* *-remove*  *--name CONTAINER_NAME* *IMAGE_NAME:IMAGE_VERSION*
<!-- * docker run -p 3002:80 -d --rm --name node-app node-demo:latest -->
* docker run -p 3002:80 -d --rm --name node-app etevabharat/node-hello-world

### stop container
* docker stop *CONTAINER_NAME*
* docker stop node-app

### start container
* docker start node-app



#### application --------------------------------------------------------
* docker build -t node-demo:latest ./01-nodejs-app-finished
* docker run -p 3002:80 -d --rm --name node-app node-demo:latest


<!-- copy from hostFileSystem to containerFileSystem  -->
### copy something (file) into container & copy something outof container
* <!-- copy from hostFileSystem to containerFileSystem and VV -->
* docker cp *source* *CONTAINER_NAME:/destination*
* docker cp ./01-nodejs-app-finished/dummy/. node-app:/test  <!-- hostFileSystem to containerFileSystem  -->
* docker cp node-app:/test/ ./01-nodejs-app-finished/fileFromContainer/. <!-- containerFileSystem to hostFileSystem  -->



# **PYTHON APP**
* docker build -t python-demo:latest ./02-python-app-finished
* docker run -it --rm --name python-app python-demo:latest