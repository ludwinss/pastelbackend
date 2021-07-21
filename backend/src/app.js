import express,{Router} from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'path';

import loginRoute from './routes/login.route';
import taskRoute from './routes/task.route';

const app=express();

//Initialization
require('./globals/config');

//settings
app.set('port',process.env.PORT||5000);

//middlewares
app.use(helmet());
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({extended:false}))
app.use(express.json())

//routes
app.use('/login',loginRoute);
app.use('/task',taskRoute);

//static files
app.use(express.static(path.join(__dirname,'public')));

export default app;
