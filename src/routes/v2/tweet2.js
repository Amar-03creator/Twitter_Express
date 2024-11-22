import express from 'express';

const router = express.Router();

router.get('/',(req,res) => {
    return res.json({
        message: 'Welcome to tweet route 2'
    });
});

router.get('/:id' ,(req,res)=>{
    return res.json({
        message: `Welcome id:${req.params.id} 2nd`,
        id: req.params.id
    });
});

export default router;