import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import AppointmentsController from '../controllers/AppointmentsController';
 


const appointmentsRouter = Router();
const appointmentController = new AppointmentsController();

//Autenticação de Rotas.
appointmentsRouter.use(ensureAuthenticated);

//GET
// appointmentsRouter.get('/', async (request, response) => {
//     const appointmentsRepository = getCustomRepository(AppointmentsRepository);
//     const appointments = await appointmentsRepository.find();
//     return response.json(appointments);
// });

//POST
appointmentsRouter.post('/',appointmentController.create);

export default appointmentsRouter;