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

## Getting Started

### Prerequisites
- Node.js and npm
- Java 17 and Maven
- Docker
- Minikube
- kubectl

### Running Locally

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

### Deploying to Minikube

1. Start Minikube:
   ```
   minikube start
   ```

2. Apply Kubernetes manifests:
   ```
   kubectl apply -f k8s/
   ```

3. Access the application:
   ```
   minikube service spencers-frontend
   ```
