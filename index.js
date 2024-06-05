import dbConnection from './db/index.js';
import dotenv from 'dotenv';


dotenv.config({
    path: './env'
})
dbConnection()


