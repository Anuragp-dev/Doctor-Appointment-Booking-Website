import express from 'express';
import { deleteUser, getAllUser, getSingleUser, updateUser } from '../Controller/userController.js';



const router = express.Router();


router.get('/:id', getSingleUser);
router.get('/', getAllUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);





export { router as userRoute};