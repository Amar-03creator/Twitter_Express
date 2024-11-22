import express  from 'express';
import tweetRouter from './tweet2.js';
import commentRouter from './comment2.js';


const router = express.Router();

router.use('/tweets',tweetRouter);
router.use('/comments',commentRouter);

export default router;