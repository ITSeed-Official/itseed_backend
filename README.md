# itseed_backend
The ITSeed official website's APIs and CMS

## Tools

- **docker and docker-compose**: https://www.docker.com/products/docker-desktop

## Getting Started
Note: **You must start the itseed_api service first** 
1. Create and turn on the development environment
```
  docker-compose up -d
```
2. Test the website
  [http://localhost:1337/admin](http://localhost:1337/admin)
3. Log in using the following default username and password
```
Email: admin@mail.com
Password: Password123
``` 

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
