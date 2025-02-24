# Spotify Clone Backend Node application

Node API REST about songs and artists

## ✔️ Requirements

- Node 21

## 🍔 Stack

- Node 21
- Mongo DB

## 🛢 Setup Mongo DB

1. Access https://www.mongodb.com/

2. Create an account and log in

3. Click on `Create cluster`

4. Click on `Collections`

5. Create a database called `spotifydb`

6. Create `artists` and `songs` collections

7. At **Security** > **Network Access**

- Add the IP `0.0.0.0/0`

8. Get the connection string

- After selecting the cluster click on **Connect** > **Drivers** and copy the connection string

## 📥 Load database with data (only once)

1. Setup `.env`
   `DATABASE_URL=<mongo_connection_string>`

2. Load the data into the database
   `node --env-file=.env --watch  ./api/insertMany.js`

## 🛠️ Install the dependencies

1. Run `npm install`

## ✈️ How to run locally

1. Run the application
   `node --env-file=.env --watch  ./api/server.js`

2. Test accessing the following endpoints

- `curl http://localhost:3000/artists`
- `curl http://localhost:3000/songs`
