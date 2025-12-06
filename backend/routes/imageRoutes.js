import express from 'express'
import {genrateImage} from '../controller/imageController.js'
import userAuth from '../middlewares/auth.js';


const imageRouter = express.Router();

imageRouter.post('/genrate-image',userAuth, genrateImage)

export default imageRouter;