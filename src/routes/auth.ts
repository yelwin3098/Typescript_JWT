import {Router} from 'express';
const router: Router= Router();
import {signin,signup,profile} from '../controller/authController';
import {TokenValidateion} from '../libs/validateToken';

router.post('/signup',signup);
router.post('/signin',signin);
router.get('/profile',TokenValidateion,profile);

export default router;