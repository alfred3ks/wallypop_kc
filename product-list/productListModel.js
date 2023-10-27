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
      name: product.name.charAt(0).toUpperCase() + product.name.slice(1),
      image: product.image,
      username: product.user.username,
      message: product.message.charAt(0).toUpperCase() + product.message.slice(1),
      price: product.price,
      type: product.type.charAt(0).toUpperCase() + product.type.slice(1),
      date: new Date().toISOString(),
    };
  });
};

