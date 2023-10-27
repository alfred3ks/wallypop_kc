export const emptyProducts = () => {
  return `
      <h3 class="card-product">No hay productos disponibles, disculpa las molestias.</h3>
    `;
};

export const buildProduct = (product) => {
  return `
        <div class="card-product">
          <a href="./tweet-detail.html?id=${product.id}">
            <figure>
              <img src="${product.image}" alt='${product.name}'onerror="this.src='assets/no-image-available.png';"/>
            </figure>
          </a>
          <p>Precio: ${product.price}€</p>
          <p>Tipo de producto: ${product.type}</p>
          <p>Descripcion: ${product.message}</p>
        </div>
  `;
};