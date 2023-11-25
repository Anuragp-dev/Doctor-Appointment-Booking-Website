import express from 'express';
import { createReview, getAllReviews } from '../Controller/reviewController.js';
import { authenticate, restrict } from '../auth/verifyToken.js';


//nested routes
const router = express.Router({ mergeParams: true });



router
.route('/')
.get(getAllReviews)
.post(authenticate, restrict(['patient']), createReview);


// export { router as reviewRoute }; both are same

export default router;