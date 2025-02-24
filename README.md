# Spotify Clone Backend Node application

Node API REST about songs and artists

## ✔️ Requirements

- Node 21

## 🍔 Stack

- Node 21
- Mongo DB

## Setup Mongo DB

1. Access https://www.mongodb.com/

## ✈️ Setup the application

1. Run `npm install`

2. Setup `.env`
   `DATABASE_URL=<mongo_connection_string`

## ✈️ How to run locally

1. Run the application
   `node --env-file=.env --watch  ./api/server.js`

2. Test accessing the following endpoints

- `curl http://localhost:3000/artists`
- `curl http://localhost:3000/songs`
