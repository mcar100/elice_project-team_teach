import cors from 'cors';
import express from 'express';
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//api 라우팅

app.get('/', (req, res) => {
  const data = {
    title: "예쁜 니트입니다.",
    description: "편하게 입을 수 있으며, 고급스러운 느낌을 줍니다.",
    price: "18,900원",
    image: "clothes.jpg"
  }   
  
  res.json(data);
});

export { app }