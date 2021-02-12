## What is this?

This repo is here to reproduce a bug in Nextjs [explained here](https://github.com/vercel/next.js/issues/22130).

### Run this project
You have to have installed Docker in your machine. If you have Docker you can do this:
```
git clone git@github.com:andresgutgon/next-href-warning.git
cd next-href-warning
docker-compose up
```

It will take a bit while downloading Docker images. But after that NextJS is running behind Nginx,
Now you need to change your `/etc/hosts` adding while testing this line there:

```
127.0.0.1 dev-user.example.com
```
Docker is exposing port `80` in your machine so you can simulate a domain. In this case we simulate that
we have `dev-user.example.com`

### Screenshot
![The waring reported in the issue](https://user-images.githubusercontent.com/49499/107816789-8f6fc480-6d75-11eb-947c-57b51666f082.png)
