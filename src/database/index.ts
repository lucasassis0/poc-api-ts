import mongoose, {Mongoose} from 'mongoose';
require('dotenv').config();

const DB_CONN = process.env.DB_CONN;
export const connect = async (): Promise<Mongoose> =>
    await mongoose.connect(DB_CONN, {
        autoIndex: true,
        autoCreate: true
    });
