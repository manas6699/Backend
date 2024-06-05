import mongoose from "mongoose";
import { db_name } from "../constants.js";

import {} from "dotenv/config";


const dbConnection = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}/${db_name}`
    );
    console.log(`Connected to db!! ${connectionInstance.connection.port}`);
  } catch (error) {
    console.log("Error occured while connecting to mongoDB", error);
  }
};

export default dbConnection;
