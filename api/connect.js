// JavaScript Assincrono
// await async

import { MongoClient } from "mongodb";

const URI = process.env.DATABASE_URL;

const client = new MongoClient(URI);

export const db = client.db("spotifydb");
// const songCollection = await db.collection("songs").find({}).toArray();

//console.log(songCollection);
