import {Router} from 'express'
import {getAllUser, loginUser, logoutUser, registerUser} from '../controllers/user.controller.js'


const router=Router();
router.post('/register',registerUser);
router.get('/',getAllUser);
router.post('/login',loginUser);
router.post('/logout',logoutUser)
export default router;
