import mongoose from "mongoose";

export const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-4c5u3zs-shard-00-00.2gpjh9m.mongodb.net:27017,ac-4c5u3zs-shard-00-01.2gpjh9m.mongodb.net:27017,ac-4c5u3zs-shard-00-02.2gpjh9m.mongodb.net:27017/REACT-LOGIN?ssl=true&replicaSet=atlas-p5e6g0-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL, {useNewUrlParser: true });
        console.log('Database connected successfully');
    }catch(error) {
        console.log('Error while connecting wtith the database', error);

    }
}

export default Connection;