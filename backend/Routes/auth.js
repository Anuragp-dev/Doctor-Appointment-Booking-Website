import express from 'express';
import { login, register } from '../Controller/authController.js';



 
// router 
const router = express.Router();



router.post('/register', register);
router.post('/login', login);



export { router as authRoute };

// export default router
