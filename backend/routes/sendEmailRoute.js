// sendEmailRoute.js

import express from 'express';
const router = express.Router();

import { sendEmail } from '../controllers/sendEmailC.js'; // Adjust the path accordingly

router.post('/sendEmail', sendEmail);

export default router;
