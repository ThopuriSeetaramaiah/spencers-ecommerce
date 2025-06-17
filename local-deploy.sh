#!/bin/bash

# Start Minikube if not running
if ! minikube status &>/dev/null; then
  echo "Starting Minikube..."
  minikube start
fi

# Set Docker environment to use Minikube's Docker daemon
eval $(minikube docker-env)

# Build frontend Docker image
echo "Building frontend Docker image..."
cd frontend
docker build -t spencers/frontend:latest .
cd ..

# Build backend Docker image
echo "Building backend Docker image..."
cd backend
./mvnw clean package -DskipTests
docker build -t spencers/backend:latest .
cd ..

# Create MySQL secret if it doesn't exist
kubectl get secret mysql-secret &>/dev/null || kubectl create secret generic mysql-secret --from-literal=password=spencers-password

# Apply Kubernetes manifests
echo "Deploying to Minikube..."
kubectl apply -f k8s/mysql-deployment.yaml
kubectl apply -f k8s/backend-deployment.yaml
kubectl apply -f k8s/frontend-deployment.yaml

# Wait for deployments
echo "Waiting for deployments to be ready..."
kubectl rollout status deployment/mysql
kubectl rollout status deployment/spencers-backend
kubectl rollout status deployment/spencers-frontend

# Get service URLs
echo "Frontend URL: $(minikube service spencers-frontend --url)"
echo "Backend URL: $(minikube service spencers-backend --url)"

echo "Deployment complete!"
