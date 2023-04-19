import express from 'express';
const app = express();

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