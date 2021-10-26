
import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import route from './routes/route.js';

const app = express();

dotenv.config();
app.use(bodyParser.json({ limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({ limit:"30mb", extended:true}));
app.use(bodyParser.json());
app.use(cors());

app.get('/server',(req, res)=>{
    res.send("Hello To Server Site");
});

app.use('/employee',route);

process.setMaxListeners(0); // for this warning MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 11 exit listeners added to [Bus]. Use emitter.setMaxListeners() to increase limit
const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`server: ${PORT}`));
mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser:true, useUnifiedTopology:true})
.then(()=> app.listen(PORT, ()=>console.log(`Server is running on Port : ${PORT} `)))
.catch((error)=> console.log(error.message))

//  mongoose.set('useFindAndModify', true);
