import express from 'express';
import { deleteDoctor, getAllDoctor, getSingleDoctor, updateDoctor } from '../Controller/doctorController.js';



const router = express.Router();


router.get('/:id', getSingleDoctor);
router.get('/', getAllDoctor);
router.put('/:id', updateDoctor);
router.delete('/:id', deleteDoctor);





export { router as doctorRoute};