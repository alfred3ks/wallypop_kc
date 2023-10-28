export const createProduct = async (name, price, type, message, image) => {
  // URL API:
  const url = 'http://localhost:8000/api/products';
  const imageUrl = await uploadImage(image);
  // extraemos el token:
  const token = localStorage.getItem('token');

  const body = {
    name: name,
    price: price,
    type: type,
    message: message,
  };

  if (imageUrl) {
    body.image = imageUrl;
  }

  let response;

  try {
    response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.message);
    }
  } catch (err) {
    // Este error se envia al controlador:
    if (err.message) {
      throw err.message;
    } else {
      throw err;
    }
  }
};


const uploadImage = async (image) => {
  let imageUrl;
  try {
    const uploadManager = new Bytescale.UploadManager({
      apiKey: "public_W142iJ17P8vqS3z4TmoLKvPpS6om"
    });
    const { fileUrl } = await uploadManager.upload({ data: image });
    imageUrl = fileUrl;
  } catch (error) {
    imageUrl = null;
  }
  return imageUrl;
}