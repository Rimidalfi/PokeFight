import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export default function connectMongo (){
    mongoose.connect(process.env.MONGO_DB_URI)
    const pokeSchema = new mongoose.Schema({
        name:String,
        pokeID:Number,
        score:Number,
        wins:Number,
        loses:Number
    })
    return mongoose.model("fight-statistic",pokeSchema);
}

// const fightResult = new Result({
//     _id:"65721906c7758f3d611aece0",
//     name:"Pikachu",
//     pokeID:25,
//     score:1,
//     wins:0,
//     loses:0
// });

// fightResult.save().then(()=>console.log("new entry"),(err)=>console.log(err));