import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import config from './config';
import router from './router';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use('/issues', router);

app.listen(config.port, () => {
  console.log(`Listening on port ${config.port}`);
});
