import dotenv from 'dotenv';
import mongoose from 'mongoose';

import { app } from './src/app.js';

dotenv.config({ path: './config/.env' });

const port = process.env.PORT || 3000;

<<<<<<< HEAD
mongoose.connect('mongodb://127.0.0.1:27017').then(() => {
  console.log('mongo db connected!');
});

app.listen(port, () => {
  console.log(`localhost:${port} connected!`);
});
=======
mongoose.connect('mongodb://localhost:27017/techmate').then(() => {
  console.log('mongo db connected!');
});

app.listen(port, () => {
  console.log(`localhost:3000 connected!`);
});
>>>>>>> order_user_YJS
