import express from 'express';
import { service } from '../controller/service.js';
const router = express.Router();

router.get('/service/:postal_code', service.getCodes);

export default router;
