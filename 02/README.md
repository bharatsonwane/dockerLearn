# node app 
# image
### remove image
* docker rmi *IMAGE_NAME*

### inspect image
* docker inspect *IMAGE_NAME*

### image list
* docker images -a

### build image
* docker build *--t IMAGE_NAME:IMAGE_VERSION PATH*
* docker build -t node-demo:latest .

### tag existing image
* docker tag node-demo:latest etevabharat/node-hello-world
### push image
* docker push *HOST:NAME/IMAGE_NAME*
* docker push etevabharat/node-hello-world

### pull image
* docker pull *HOST:NAME/IMAGE_NAME*
* docker pull etevabharat/node-hello-world

# Container
### run container
* docker run *port HOST_SYSTEM_PORT:CONTIANER_PORT -ditached -remove  --name CONTAINER_NAME IMAGE_NAME:IMAGE_VERSION*
<!-- * docker run -p 3000:80 -d --rm --name node-app node-demo:latest -->
* docker run -p 3000:80 -d --rm --name node-app etevabharat/node-hello-world

### list container
* docker ps -a  

### stop container
docker stop *CONTAINER_NAME*

<!-- copy from hostFileSystem to containerFileSystem  -->
### copy something (file) into container & copy something outof container
* <!-- copy from hostFileSystem to containerFileSystem and VV -->
* docker cp *source   CONTAINER_NAME:/destination*
* docker cp dummy/. node-app:/test  <!-- hostFileSystem to containerFileSystem  -->
* docker cp node-app:/test/ fileFromContainer/.   <!-- containerFileSystem to hostFileSystem  -->

