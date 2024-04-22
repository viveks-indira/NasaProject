import mongoose from 'mongoose';
// Update below to match your own MongoDB connection string.
const mongo_url='mongodb+srv://root:root@cluster0.v0b0zhp.mongodb.net/nasa_project?retryWrites=true&w=majority&appName=Cluster0'

mongoose.connection.once('open', () => {
  console.log('MongoDB connection ready!');
});

mongoose.connection.on('error', (err) => {
  console.error(err);
});

export async function mongoConnect() {
  await mongoose.connect(mongo_url);
}

 
export default {
    mongoConnect,
};