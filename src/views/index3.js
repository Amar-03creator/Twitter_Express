import express from 'express';
import morgan from 'morgan';
import { PORT } from '../config/serverconfig.js';
import apiRouter from '../routes/apiRoutes.js';
import connectDB from '../config/dbConfig.js';

const app = express();
console.log(import.meta);
app.set('view engine','ejs');
app.set('views',import.meta.dirname + '/views');

app.use(morgan('combined'));

app.use(express.json());   //app.use(function()) is used to read the form of data is sent in body
app.use(express.text());
app.use(express.urlencoded());

app.use('/api', apiRouter)

app.get('/', (req,res) => {
    res.render('home' , {name:Amarnath});
});

app.get('/ping' , (req , res) =>{
    return res.json({
        msg: 'pong' 
    });
});


app.all('*',(req,res)=>{
    return res.status(404).json({
        message: 'Error 404'
    });
});

//Define a port and attack an express ap
app.listen(PORT,()=> {
    console.log(`Server running on PORT : ${PORT}`);
    connectDB();
});  