import dotenv from 'dotenv';

import { app } from './src/app.js';

dotenv.config({ path: './config/.env' });

const port = process.env.PORT || '3000';

app.listen(port, () => {
  console.log(`서버가 정상적으로 시작되었습니다. http://localhost:${port}`);
});
