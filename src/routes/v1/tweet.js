import express from 'express';
import { getID , createTweet } from '../../Controllers/tweetController.js';
import { getTweets } from '../../Controllers/tweetController.js';
import {validate} from '../../Validators/zodValidators.js';
import { tweetZodSchema } from '../../Validators/tweetZodSchema.js';


const router = express.Router();

router.get('/',getTweets);

router.get('/:id' , getID);

router.post('/', validate(tweetZodSchema) , createTweet)

export default router;