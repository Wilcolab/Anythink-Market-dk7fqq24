# Node.js Express Server

This project is a simple Express server scaffolded with TypeScript. It listens on port 8001 and is set up to automatically restart on code changes using Nodemon.

## Project Structure

```
node-server
├── src
│   └── server.ts          # Entry point of the application
├── Dockerfile             # Dockerfile to build the server image
├── package.json           # npm configuration file
├── tsconfig.json          # TypeScript configuration file
├── nodemon.json           # Nodemon configuration file
└── README.md              # Project documentation
```

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- Docker installed on your machine (if you want to run the server in a container).

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/Wilcolab/Anythink-Market-dk7fqq24.git
   cd node-server
   ```

2. Install the dependencies:

   ```
   npm install
   ```

### Running the Server

To run the server locally, use the following command:

```
npm start
```

This will start the server using Nodemon, which will automatically restart the server on code changes.

### Running with Docker

To build and run the server using Docker, use the following commands:

1. Build the Docker image:

   ```
   docker build -t node-server .
   ```

2. Run the Docker container:

   ```
   docker run -p 8001:8001 node-server
   ```

The server will be accessible at `http://localhost:8001`.

### License

This project is licensed under the MIT License.