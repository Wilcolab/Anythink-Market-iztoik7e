# Anythink Market - Multi-Server Application

This project contains both a Python FastAPI server and a Node.js Express server. The Node.js server is the primary implementation and includes all endpoints migrated from the Python server.

## Project Structure

The project has the following files and directories:

### Node.js Express Server
- `express-server/src/app.js`: The main Express.js server implementation with task management endpoints
- `express-server/package.json`: Node.js dependencies and project configuration
- `express-server/nodemon.json`: Nodemon configuration for development hot-reloading
- `express-server/Dockerfile`: Docker image for the Express.js server

### Python FastAPI Server (Legacy)
- `python-server/src/main.py`: Original FastAPI server implementation with task management routes
- `python-server/src/__init__.py`: Python package marker
- `python-server/requirements.txt`: Python dependencies
- `python-server/Dockerfile`: Docker image for the FastAPI server

### Docker Configuration
- `docker-compose.yml`: Multi-container orchestration for both servers

## Getting Started

To run both servers using Docker, follow these steps:

- Build and start the Docker containers by running the following command:

  ```shell
  docker compose up
  ```

  This command will build the Docker images and start the containers defined in the `docker-compose.yml` file.

## Server Ports

- **Node.js Express Server**: Running on port `8001` (Primary)
- **Python FastAPI Server**: Running on port `8000` (Legacy)

## API Routes

Both servers provide the following API routes:

- `GET /`: Returns "Hello World"
- `POST /tasks`: Adds a task to the task list. The request body should contain `{ "text": "task description" }`
- `GET /tasks`: Retrieves the task list with all stored tasks

### Example API Usage

```shell
# Get root endpoint
curl http://localhost:8001/

# Add a new task (Node.js server)
curl -X POST http://localhost:8001/tasks \
  -H "Content-Type: application/json" \
  -d '{"text": "Your task here"}'

# Get all tasks
curl http://localhost:8001/tasks
```

## Migration Details

The Python endpoints have been successfully migrated to the Node.js Express server. The Node.js implementation provides:
- Same API contract as the original Python server
- JSON request/response handling with Express middleware
- Input validation for task creation
- In-memory task storage with sample data
- Docker support for containerized deployment

## Development

For local development with hot-reloading:

```shell
cd express-server
npm install
npm start
```

The Express server will restart automatically when you modify the code.

