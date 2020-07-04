# Unisons Application

## Prerequisites

* Node.js 10
* Docker
* Mysql

## Start the developement

### Install dependencies

``` bash
npm install
```

### Start server

```bash
npm start

# send GET request
curl -i http://localhost:5000/api/v1/test
```

### Build Docker Image

```bash
docker build -t bookshop-app .

# this will list down the available images
docker images
```

### Run Docker Image

```bash
docker run -p 8080:5000 -d bookshop-app

# this will list down the running applications
docker ps
```
