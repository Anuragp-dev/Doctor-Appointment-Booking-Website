import express from 'express';
import cors from 'cors'
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import { authRoute } from './Routes/auth.js';
import { userRoute } from './Routes/user.js';
import { doctorRoute } from './Routes/doctor.js';


dotenv.config()
const app =  express()

const port = process.env.PORT || 8000

const corsOptions = {
    origin:true
}

app.get('/', (req, res) => {
    res.send('api is working')
})

//database connection

mongoose.set('strictQuery', false);


const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("mongo Database connected");
    }catch(err) {
            console.log("mongo Database falied");
    }
}


//middleware

app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use('/api/v1/auth',authRoute)
app.use('/api/v1/users',userRoute)
app.use('/api/v1/doctors',doctorRoute)

app.listen(port, () => {
    connectDb();
    console.log("server is running on port" + port);
})