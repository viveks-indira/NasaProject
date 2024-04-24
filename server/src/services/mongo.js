import dotenv from 'dotenv';
dotenv.config();

// mongo.js
import mongoose from 'mongoose';
 

// Assuming your MongoDB URI is stored in the environment variable 'Mongo_Url'
const Mongo_Url = process.env.Mongo_Url;
console.log(Mongo_Url)
mongoose.connection.once('open', () => {
  console.log('MongoDB connection ready!');
});

mongoose.connection.on('error', (err) => {
  console.error(err);
});

export async function mongoConnect() {
  await mongoose.connect(Mongo_Url);
}
