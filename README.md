# TS-Mailer

A TypeScript Mailer.

### Setup a Express Server with TypeScript

[Read this](https://github.com/lucasnevespereira/ts-mailer/blob/master/SETUP.md)

## Usage

First clone the project

```
https://github.com/lucasnevespereira/ts-mailer.git
```

At the root of the project create a .env file

```
cd ts-mailer

touch .env
```

In this `.env` file create this variables with your mailer credentials.
[Please read this first 🙂](https://github.com/lucasnevespereira/ts-mailer/blob/master/GMAIL.md)

```
AUTH_EMAIL="yourMailAccount"
AUTH_PASS="yourMailPassword"
```

Install dependecies

```
npm i
```

Start the server

```
 npm start
```

## Endpoints

<b>POST</b> `/send`

### Request Example <b>[Postman]</b>

```
{
  "name": "User",
  "email": "user@mail.com",
  "message": "my message"
  "to": "receiver@mail.com"
}

```
