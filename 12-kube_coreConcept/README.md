kubermatic ==> for manage infrastructure
minikube ==> setup a cluster ==> for locally

## minikube command
* minikube status
* minikube stop
* minikube start
* minikube start --driver=hyperv
* minikube dashboard

## kubectl command
* kubectl get deployments
* kubectl get services
* kubectl get pods


### differenct object
* deployment Object
* service Object


## kub-first-app
### imperative approach
* docker build -t kub-first-app .
* docker push kub-first-app
* kubectl create deployment first-app --image=etevabharat/kub-first-app
* kubectl expose deployment first-app --type=LoadBalancer --port=8080
* minikube service first-app
* kubectl scale deployment/first-app --replicas=3
* docker build -t kub-first-app:2 .
* docker push kub-first-app:2
* kubectl set image deployment/first-app kub-first-app=etevabharat/kub-first-app:2
* kubectl rollout status deployment/first-app
* kubectl rollout undo deployment/first-app
* kubectl rollout undo deployment/first-app --to-revison
* kubectl rollout histroy deployment/first-app

##
* kubectl delete service first-app
* kubectl delete deployment first-app


### declarative approach
* kubectl apply -f deployment.yaml
* kubectl apply -f service.yaml
* minikube service backend
* kubectl delete -f deployment.yaml -f service.yaml
* kubectl apply -f master-deployment.yaml
* kubectl delete -f master-deployment.yaml


### selector
* kubectl delete deployments,services -l group=example
