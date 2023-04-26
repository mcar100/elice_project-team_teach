import dotenv from 'dotenv';
import mongoose from 'mongoose';

import { app } from './src/app.js';

dotenv.config({ path: './config/.env' });

const port = process.env.PORT || 3000;

mongoose
  .connect(
    'mongodb+srv://seob:jzMhgv91ByD3xTpZ@techmate.qp6i8fm.mongodb.net/techmate'
  )
  .then(() => {
    console.log('mongo db connected!');
  });

app.listen(port, () => {
  console.log(`서버가 정상적으로 시작되었습니다. http://localhost:${port}`);
});
