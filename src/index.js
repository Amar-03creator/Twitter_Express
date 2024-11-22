// import express from 'express';

// const app = express();

// function mid1(req, res, next){
//     console.log('mid1');
//     next();
// }

// function mid2(req, res, next){
//     console.log('mid2');
//     next();
// }

// function CommonMiddleWare(req,res ,next){  //Top priority in all the middle wares as we are going to call app.use function
//     console.log('CommonMiddleWare');
//     next();
// }
// app.use(CommonMiddleWare)
// app.get('/ping' , [mid1 ,mid2] ,(req , res) =>{
//     return res.json({
//         msg: 'pong' 
//     });
// });



// const middleWare = [mid1 ,mid2];

// app.get('/hello' , middleWare, (req , res) =>{
//     return res.json({
//         msg: 'world' 
//     });
// });

// //Define a port and attack an express ap
// app.listen(3000,()=> {
//     console.log("S3erver running");
// });  