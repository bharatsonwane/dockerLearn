## docker deployment 01

* docker build -t node-dep-example .
* docker run -d --rm --name node-dep -p 80:80 node-dep-example



## Installing docker on EC2 VM
* sudo ym update -y
<!-- install docker on remote machine -->
* sudo amazon-linux-extras install docker
<!-- start docker on VM -->
* sudo service docker start

## dockerhub repo name ==> node-example-1

* docker build -t node-dep-example-1 .
* docker tag node-dep-example-1 etevabharat/node-example-1
* docker push etevabharat/node-example-1
<!-- VM command -->
* sudo docker run -d --rm -p 80:80 etevabharat/node-example-1
*  sudo docker pull etevabharat/node-example-1
