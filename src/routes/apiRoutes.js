import express from 'express';
import v1router from './v1/v1routes.js';
import v2router from './v2/v2routes.js';
const router = express.Router();

router.use('/v1',v1router);

router.use('/v2',v2router);

export default router; 