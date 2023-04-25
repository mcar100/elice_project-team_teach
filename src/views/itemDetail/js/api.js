import {initSetting} from "./index.js";

console.log("api.js start");

const getProductFromServer = async (productId) =>{
  const res = await fetch(`http://localhost:3000/products/${productId}`);
  const product = await res.json();

  console.log(product);
  return product;
}

window.onload = async () =>{
  let id = "6447cc879993f3e302faf8bd";
  let itemData = await getProductFromServer(id);
  
  initSetting(itemData);
}