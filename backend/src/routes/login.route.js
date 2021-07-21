import {Router} from 'express';
import loginController from '../controllers/login.controller';
import upload from '../services/multer.service';

const router=Router();

router.post('/signup',(req,res,next)=>{
	console.log(req.body);
	next();

},
upload.single('image'),

loginController.signup);

router.post('/signin',loginController.signin);

export default  router;
