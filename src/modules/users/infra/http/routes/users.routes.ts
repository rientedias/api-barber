import { Router } from 'express';

import multer from 'multer';
import uploadConfg from '@config/upload';
import CreateUserService from '@modules/users/services/CreateUserService';
import UpdateUserAvatarService from '@modules/users/services/UpdateUserAvatarService';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import UsersControler from '../controllers/UsersController';
import UsersAvatarControler from '../controllers/UserAvatarController';


const usersRouter = Router();
const upload = multer(uploadConfg);
const usersController = new UsersControler();
const usersAvatarControler = new UsersAvatarControler();
//POST
usersRouter.post('/', usersController.create);

usersRouter.patch('/avatar',
    ensureAuthenticated,
    upload.single('avatar'),
    usersAvatarControler.update
);
export default usersRouter;