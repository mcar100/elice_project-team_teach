import dotenv from 'dotenv';
import mongoose from 'mongoose';

import { app } from './src/app.js';

dotenv.config({ path: './config/.env' });

const port = process.env.PORT || 3000;
const DB_URI = process.env.ATLAS_URI;

mongoose
  .connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  // useNewUrlParser와 useUnifiedTopology는 MongoDB의 최신 버전에서 필수적으로 필요한 옵션
  // useNewUrlParser는 MongoDB의 새로운 URL 파서를 사용하도록 지시
  // useUnifiedTopology는 MongoDB의 새로운 연결 프로토콜을 사용하도록 지시
  .then(() => {
    console.log('Successfully connected to MongoDB');
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB', error);
  });

mongoose.connection.on('error', (error) => {
  console.error('DB 연결 에러', error);
});
mongoose.connection.on('disconnected', () => {
  console.error('DB 연결 끊김. 연결 재시도.');
  mongoose
    .connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log('Successfully connected to MongoDB');
    })
    .catch((error) => {
      console.log('Error connecting to MongoDB', error);
    });
});
app.listen(port, () => {
  console.log(`서버가 정상적으로 시작되었습니다. http://localhost:${port}`);
});
