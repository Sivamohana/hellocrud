import mongoose from 'mongoose';




const connection =async (username, password) =>{
    const URL = `mongodb://${username}:${password}@ac-kdj2bov-shard-00-00.w3s4ldw.mongodb.net:27017,ac-kdj2bov-shard-00-01.w3s4ldw.mongodb.net:27017,ac-kdj2bov-shard-00-02.w3s4ldw.mongodb.net:27017/?ssl=true&replicaSet=atlas-ymlt55-shard-0&authSource=admin&retryWrites=true&w=majority`;

   try{
    await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true});
    console.log("database connected successfully");
   }catch(error)
   {
    console.log("Error while connecting with the database"+ error);
   }
}

export default connection;