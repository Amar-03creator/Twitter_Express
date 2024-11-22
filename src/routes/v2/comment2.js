import express from 'express';

const router = express.Router();

router.get('/',(req,res) => {
    return res.json({
        message: 'Welcome to tweet comment 2'
    });
});

router.get('/:id' ,(req,res)=>{
    return res.json({
        message: `Welcome id:${req.params.id} to comment routes 2`,
        id: req.params.id
    });
});

export default router;