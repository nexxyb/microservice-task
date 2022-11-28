## How to run this app
1.  Clone this repository to your machine
2.  To proceed make sure you have docker, kubernetes helm are installed on your machine
3.  Navigate to the root of the project
4.  Start kubernetes cluster using minikube by running 
    
    ```bash
    $ minikube start
    $ minikube addons enable ingress
    ```

5.  Ensure that the kubernetes is using docker env variable by running:
    <br />
    `minikube -p minikube docker-env`
    <br />
6.  Ensure to point your shell to minikube's docker-daemon, run:
     `eval $(minikube -p minikube docker-env)`
7. Build the images for both frontend and backend
    ```bash
    $ docker build -t backlent ./backend
    $ docker build -t frontlent ./frontend
    ```
8. Deploy both frontend apps to the kubernetes cluster:
    ```bash
    $ helm install backend ./helm/backend
    $ helm install frontend ./helm/frontend
    $ helm install -f helm/ingress.yaml ingress ./helm/ingress
    ```
9.  Go to `127.0.0.1:80` to see the running apps
