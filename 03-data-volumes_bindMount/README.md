
* docker build -t feedback-node:volumes .


# data

## volumes (Manage by Docker)
* We dont know location where volume data store on hostFileSystem.
### anonymous volume (Manage by Docker) ==> e.g.==> docker run -v /app/data
* this volume attached to specific container
* exist only if container exists & if container remove then attached volume also removed.

* docker run -p 3001:80 -d --rm --name feedback-app -v "*CONTAINER_PATH*" feedback-node:volumes 
* docker run -p 3001:80 -d --rm --name feedback-app -v "/app/node_modules" feedback-node:volumes

### named volume (Manage by Docker) ==> e.g.==> docker run -v data:/app/data
* this volume not attached to specific container
* data persists

* docker run -p 3001:80 -d --rm --name feedback-app -v *VOLUME_NAME:CONTAINER_PATH* feedback-node:volumes
* docker run -p 3001:80 -d --rm --name feedback-app -v feedback:/app/feedback feedback-node:volumes


### Bind Mount (Manage By us) ==> for development e.g.==> docker run -v "%cd%":/app/data
* This volume not attached to specific container
* We know location where volume data store on hostFileSystem.
* We define a folder / path on our host machine.
* Great for persistent, editable data. (eg. source code)
* By useing *docker volume ls* we are not able to see bindmount volume since bindmount not managed by docker.

* docker run -p 3001:80 -d --rm --name feedback-app -v "*PROJECT_FOLDER_ABSOLUTE_PATH:CONTAINER_PATH*" feedback-node:volumes 
* docker run -p 3001:80 -d --rm --name feedback-app -v "%cd%:/app" feedback-node:volumes
* docker run -p 3001:80 -d --rm --name feedback-app -v "E:\bharatProject\dockerLearn\03-data-volumes_bindMount:/app" feedback-node:volumes

## application --------------------------------------------------------
* docker build -t feedback-node:volumes .
<!-- ro ==> read only -->
* docker run -p 3043:80 --env-file *ENV_FILE_NAME* -d --rm --name feedback-app -v "*CONTAINER_PATH*" -v "*CONTAINER_PATH*"  -v *VOLUME_NAME:CONTAINER_PATH* -v 
"*PROJECT_FOLDER_ABSOLUTE_PATH:CONTAINER_PATH:ro*" feedback-node:volumes 
* *$(pwd)* ==> "E:\bharatProject\dockerLearn\03-data-volumes_bindMount" ==> current working directory
* docker run -p 3043:8000 --env-file ./.env -d --rm --name feedback-app -v "/app/node_modules" -v "/app/temp" -v "feedback:/app/feedback" -v "$(pwd):/app" feedback-node:volumes


### feedback-app
docker build -t feedback-node .
docker run -p 3043:80 -d --rm --name feedback-app feedback-node



docker stop feedback-app
docker volume ls

