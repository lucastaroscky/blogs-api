<h1 align="center">API Blog Posts</h1>

<p align="center">API in nodeJS using sequelize that allows you to register a user and create blog posts, using sequelize and creating a SQL database.</p>

## Clone the repository

```bash
git clone git@github.com:lucastaroscky/blogs-api.git
```

## Installation 

- [Node](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [MySQL Workbench](https://dev.mysql.com/doc/workbench/en/wb-installing.html)


## Configuring environment variables

Open the folder on a text editor of your preference and create a new file called `.env` and inside of this file change the value of the variables according to your mysql workbench server data: 

```bash
MYSQL_USER=root // by default the service name is root when you create an instance of mysql workbench.
MYSQL_PASSWORD=password //password that you create when started an instance.
JWT_SECRET=secret // this secret is use to encrypt user data to create and validate the token/
```

## Starting server

Open terminal and type:

```bash
npm run dev
```

You`ll receive something like this:

```bash
[nodemon] 2.0.13
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node index.js`
listening on port 3000
```

## Usage

- Register 

```bash
curl http://localhost:3000/user -d '{"name":"test", "email":"email@email.com", "password":"123456", "image":"url image"}' -H "Content-Type: application/json" -X POST | json_pp
```

The response will give you a token, as the follow example:

```bash
{
  "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}
```
