import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { connectDB } from './src/Database/Database.js';
import router from './src/Routes/Routes.js';
import cookieParser from 'cookie-parser'

const app = express();  
app.use(cors());
app.use(bodyParser.json());
app.use(router)


app.use('/Uploads', express.static('Uploads'));
app.use(cookieParser())


connectDB()

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})