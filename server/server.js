import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.js'
import hotelsRoutes from './routes/hotels.js'
import roomsRoutes from './routes/rooms.js'
import usersRoutes from './routes/users.js'

const app = express();
dotenv.config();
const PORT = 5000;

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB);
        console.log('Connected to Database!')
      } catch (error) {
        throw error;
    }
}

mongoose.connection.on('disconnected', () => {
    console.log('MongoDB disconnected!')
})

// middlewares

app.use(express.json())// to send json obj to express we need this middleware


app.use('/api/auth', authRoutes);
app.use('/api/hotels', hotelsRoutes);
app.use('/api/rooms', roomsRoutes);
app.use('/api/users', usersRoutes);

app.use((err,req, res, next) =>{
    const errorStatus = err.status || 500;
    const errorMessage = err.message || 'Something went wrong!';
    res.status(errorStatus).json({
        status: errorStatus,
        success: false,
        message: errorMessage,
        stack: err.stack
    })
})

app.listen(PORT, () => {
    connect()
   console.log(`Server is running on port ${PORT}`)
})