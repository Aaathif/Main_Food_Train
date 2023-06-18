import express from 'express'
import { createAttendance, getAttendance, getAttendances, getDelete } from '../controllers/attendence.js'

const router = express.Router();

router.post('/', createAttendance)

router.get('/', getAttendances)

router.get('/:id', getAttendance)

router.delete('/:id', getDelete)

export default router