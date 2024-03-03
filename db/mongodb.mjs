import mongoose from "mongoose";
import { DB_URI } from "../config/index.mjs"

export default function connectDB() {

    mongoose.connect(DB_URI).catch(err => {
        console.log(err)
        process.exit(1);
    })

    const dbConnection = mongoose.connection;
    dbConnection.on('connected', function () {//connected
        console.log("Mongoose is connected");
    });

    dbConnection.on('disconnected', function () {//disconnected
        console.log("Mongoose is disconnected");
        process.exit(1);
    });

    dbConnection.on('error', function (err) {//any error
        console.log('Mongoose connection error: ', err);
        process.exit(1);
    });

    process.on('SIGINT', function () {/////this function will run jst before app is closing
        console.log("app is terminating");
        dbConnection.close(function () {
            console.log('Mongoose default connection closed');
            process.exit(0);
        });
    });

    return;
}
