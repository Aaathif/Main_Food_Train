import express from 'express'
import {createAddEmpo,getAddEmpo,getAddEmpos,updateAddEmpo,deleteAddEmpo} from '../controllers/addEmpo.js'

const router = express.Router();

router.post('/', createAddEmpo)

 router.get('/', getAddEmpos)

router.get('/find/:id', getAddEmpo)

router.delete("/:id", deleteAddEmpo)

router.put("/:id", updateAddEmpo)

export default router