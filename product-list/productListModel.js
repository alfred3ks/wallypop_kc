export const getProducts = async () => {
  const url = 'http://localhost:8000/api/products?_expand=user';
  let parsedProducts = [];
  try {
    const response = await fetch(url);
    const products = await response.json();
    parsedProducts = transformProducts(products);
  } catch (err) {
    throw err;
  }
  return parsedProducts;
};

const transformProducts = (products) => {
  return products.map((product) => {
    return {
      id: product.id,
      image: product.image,
      username: product.user.username,
      message: product.message,
      price: product.price,
      type: product.type,
      date: new Date().toISOString(),
    };
  });
};

