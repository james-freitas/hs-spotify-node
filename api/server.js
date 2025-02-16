// API significa Application Programming Interface
import express from "express";
import { artistArray } from "../database/artists.js";
import { songsArray } from "../database/songs.js";

const app = express();
const PORT = 3000;

app.get("/", (request, response) => {
  response.send("Endpoints available '/artists' and '/songs'");
});

app.get("/artists", (request, response) => {
  response.send(artistArray);
});

app.get("/songs", (request, response) => {
  response.send(songsArray);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
