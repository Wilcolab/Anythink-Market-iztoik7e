# Express Server Project

This project is a simple Express server that listens on port 8001. It is set up to use nodemon for automatic code reloading during development.

## Project Structure

```
express-server
├── src
│   └── app.js          # Entry point of the application
├── Dockerfile          # Dockerfile to build the application image
├── package.json        # npm configuration file
├── nodemon.json        # Configuration for nodemon
└── README.md           # Project documentation
```

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- Yarn package manager installed.

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/Wilcolab/Anythink-Market-iztoik7e.git
   cd Anythink-Market-iztoik7e/express-server
   ```

2. Install dependencies:
   ```
   yarn install
   ```

### Running the Server

To start the server with automatic reloading, run:
```
yarn start
```

The server will be available at `http://localhost:8001`.

### Building the Docker Image

To build the Docker image, run:
```
docker build -t express-server .
```

### Running the Docker Container

To run the Docker container, use:
```
docker run -p 8001:8001 express-server
```

The server will be accessible at `http://localhost:8001` from your host machine.