# itseed_backend
The ITSeed official website's APIs and CMS

## Tools

- **docker and docker-compose**: https://www.docker.com/products/docker-desktop

## Getting Started

1. Create and turn on the development environment
```
  docker-compose up -d
```
2. Test the website
  [http://localhost:1337/](http://localhost:1337/)

## Some useful commands

- Enter the node environemnt. (If you want to install any node module, please enter first.)
```
  docker-compose run app /bin/bash
```

- Show web service logs
```
  docker-compose logs -f app
```

- Turn off the environment
```
  docker-compose down
```
