import {Router} from 'express';

import JWT from '../services/jwt.service';
import taskController from '../controllers/task.controller';

const router=Router();

//Admin's route
router.get('/',JWT.isAdmin,taskController.listAll)
router.get('/employees',JWT.isAdmin,taskController.listAllEmployees)
router.post('/',JWT.isAdmin,taskController.add)
router.delete('/:id',JWT.isAdmin,taskController.deleteTask);

//Employe's route
router.get('/mytasks/all',JWT.isEmployee,taskController.listAllMyTask)
router.get('/mytasks/progress',JWT.isEmployee,taskController.listProgressMyTask)
router.put('/mytasks/progress/:id',JWT.isEmployee,taskController.updateStatusMyTask)
export default router;
