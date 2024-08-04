import { Router } from 'express';
const router = Router();
import {
  getJob,
  getJobs,
  createJob,
  updateJob,
  deleteJob,
} from '../controllers/jobController.js';

// Get all jobs
router.get('/', getJobs);

// Get single job
router.get('/:id', getJob);

// Create new job
router.post('/', createJob);

// Update Job
router.put('/:id', updateJob);

// Delete Job
router.delete('/:id', deleteJob);

export default router;
