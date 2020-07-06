import express,{Application} from 'express';
const app: Application=express();

import morgan from 'morgan';
import authRoute from './routes/auth';

app.use(morgan('dev'));
app.use(express.json());

app.use('/api/auth',authRoute);

app.set('port',3000);

export default app;