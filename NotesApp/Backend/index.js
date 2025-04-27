import express from 'express';
import cors from 'cors';
import authRouter from './routes/auth';

const app  = express();
app.use(cors());

app.use('/api/auth', authRouter);


app.get('/',(req,res)=>{
    console.log("received the backend request ");
});



app.listen('3000',()=>{
    console.log("Server is running on port 3000 ....");
    
});