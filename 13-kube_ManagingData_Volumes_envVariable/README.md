# 13-kube_ManagingData_Volumes_envVariable

## 
* docker-compose up
* docker-compose down

##  API request
* POST resuest
{
    "text": "My text!"
}


## project command
* kubectl apply -f host-pv.yaml -f host-pvc.yaml
* kubectl get pv 
* kubectl get pvc 

* kubectl apply -f environment.yaml
* kubectl get configmap 

* kubectl apply -f service.yaml -f deployment.yaml
* kubectl get deployments 
* minikube service story-service


* CSI volume type
* kubectl get sc