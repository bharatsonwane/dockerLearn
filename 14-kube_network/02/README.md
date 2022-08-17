
minikube status
kubectl get deployments
kubectl get pods
kubectl get services
kubectl get namespaces

<!-- docker rmi etevabharat/kub-demo-users -->
kubectl delete deployment users-deployment auth-deployment tasks-deployment frontend-deployment
kubectl delete service users-service auth-service tasks-service frontend-service
<!-- docker-compose up -d --build -->

docker build -t etevabharat/kub-demo-users .  <!-- user folder -->
docker push etevabharat/kub-demo-users
kubectl apply -f ./kubernetes/users-deployment.yaml -f ./kubernetes/users-service.yaml
<!-- get service access -->
minikube service users-service

docker build -t etevabharat/kub-demo-auth .
docker push etevabharat/kub-demo-auth
kubectl apply -f ./kubernetes/auth-deployment.yaml -f ./kubernetes/auth-service.yaml

docker build -t etevabharat/kub-demo-tasks .
docker push etevabharat/kub-demo-tasks
kubectl apply -f ./kubernetes/tasks-deployment.yaml -f ./kubernetes/tasks-service.yaml
minikube service tasks-service


docker build -t etevabharat/kub-demo-frontend .
docker push etevabharat/kub-demo-frontend
kubectl apply -f ./kubernetes/frontend-deployment.yaml -f ./kubernetes/frontend-service.yaml
minikube service frontend-service