
minikube status
kubectl get deployments
kubectl get pods
kubectl get services


<!-- docker-compose up -d --build -->

docker build -t etevabharat/kub-demo-users .  <!-- user folder -->
docker push etevabharat/kub-demo-users

kubectl apply -f ./kubernetes/users-deployment.yaml
kubectl apply -f ./kubernetes/users-service.yaml
<!-- get service access -->
minikube service users-service


docker build -t etevabharat/kub-demo-auth .
docker push etevabharat/kub-demo-auth