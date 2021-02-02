---
layout: default
---

# Dockerize your routify application

A guide about dockerize your routify webapp. Note this is a community written guide with contributions from [HAUDRAUFHAUN](https://github.com/HAUDRAUFHAUN).

## 📑 Clone the template

First, create a routify application by getting the latest template:

```bash
mkdir my-routify-app | cd
npx @roxi/routify init
```

## 🏗️ Setup the Dockerfile

Now we can get to the heart of our Dockerization: the `Dockerfile`:
First, create a file called `Dockerfile` in you main app directory next to `package.json`. Then add following to the file: 

```docker
FROM nginx
COPY dist /usr/share/nginx/html
```

This dockerfile will build a basic ngnix container that will serve our built application files.

## 🏃‍♂️ Get the container up and running

To get the container up and running, we have to get the build output of our application first:

```bash
npm run build
```

When this process is finished, we can build the docker container:

```bash
docker build -t routify-goes-docker .
```

When this process is finished, we can run our built docker image with:

```bash
docker run --name awesome-webapp -d -p 8080:80 routify-goes-docker
```

Now you should be able to look at [http://localhost:8080](http://localhost:8080) where your docker application is served to. You should also be able to access the application in your local network from other devices via <u>http://your-ip-address:8080</u>.
