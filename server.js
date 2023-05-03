import dotenv from 'dotenv';
import mongoose from 'mongoose';

import { app } from './src/app.js';

dotenv.config({ path: './config/.env' });

const port = process.env.PORT || 3000;

mongoose.connect(`${process.env.DB_URL}`).then(() => {
  console.log('mongo db connected!');
});

app.listen(port, () => {
  console.log(`localhost:${port} connected!`);
});
