const port = 3000;
const getCategories = async () => {
  const response = await fetch(`http://34.22.85.74:${port}/categories`);
  const data = response.json();
  return data;
};

export { getCategories };
