# Spencers E-commerce Application

A full-stack e-commerce application with React frontend, Spring Boot backend, and MySQL database, all deployed in Minikube.

## Project Structure

- `frontend/`: React.js frontend application
- `backend/`: Spring Boot backend API
- `k8s/`: Kubernetes deployment manifests
- `docs/`: Documentation and diagrams

## Technologies Used

### Frontend
- React.js
- React Router
- Bootstrap
- Axios

### Backend
- Spring Boot
- Spring Data JPA
- Spring Security
- MySQL Connector

### Database
- MySQL

### DevOps
- Docker
- Kubernetes (Minikube)
- GitHub Actions

## CI/CD Pipeline

This project includes a GitHub Actions workflow that:

1. Builds the frontend and backend applications
2. Creates Docker images for both applications
3. Pushes the Docker images to GitHub Container Registry
4. Deploys the application to Minikube

The workflow is triggered on:
- Push to the main branch
- Pull requests to the main branch
- Manual trigger (workflow_dispatch)

## Getting Started

### Prerequisites
- Node.js and npm
- Java 17 and Maven
- Docker
- Minikube
- kubectl

### Running Locally

#### Option 1: Manual Setup

1. Start the backend:
   ```
   cd backend
   ./mvnw spring-boot:run
   ```

2. Start the frontend:
   ```
   cd frontend
   npm install
   npm start
   ```

#### Option 2: Using Minikube

Use the provided script to deploy to Minikube:

```
./local-deploy.sh
```

This script will:
1. Start Minikube if it's not running
2. Build Docker images for frontend and backend
3. Deploy the application to Minikube
4. Display the URLs to access the application

### Deploying with GitHub Actions

The GitHub Actions workflow will automatically deploy changes to Minikube when you push to the main branch.

To manually trigger a deployment:
1. Go to the "Actions" tab in your GitHub repository
2. Select the "Build and Deploy to Minikube" workflow
3. Click "Run workflow"

## Accessing the Application

After deployment, you can access the application at:

- Frontend: http://minikube-ip:30080
- Backend API: http://minikube-ip:30080/api

To get the Minikube IP:
```
minikube ip
```
