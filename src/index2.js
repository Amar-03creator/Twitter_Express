// import express from 'express';
// import morgan from 'morgan';

// const app = express();
// console.log(import.meta);
// app.set('view engine','ejs');
// app.set('views',import.meta.dirname + '/views');

// app.use(morgan('combined'));
// app.use(express.json());   //app.use(function()) is used to read the form of data is sent in body
// app.use(express.text());
// app.use(express.urlencoded());

// app.get('/', (req,res) => {
//     res.render('home' , {name:Amarnath});
// });

// app.get('/ping' , (req , res) =>{
//     return res.json({
//         msg: 'pong' 
//     });
// });



// app.post('/hello' ,  (req , res) =>{
//     console.log(req.query);   //querry params
//     console.log(req.body);   // req body
//     return res.json({
//         msg: 'world' 
//     });
// });

// app.get('/tweets/:tweet_id/comments/:comment_id' ,(req,res)=> {
//     console.log(req.params);   //url params
//     return res.json({
//         message: 'tweet details'
//     });
// });

// app.all('*',(req,res)=>{
//     return res.status(404).json({
//         message: 'Error 404'
//     });
// });

// //Define a port and attack an express ap
// app.listen(5000,()=> {
//     console.log("S3erver running");
// });  