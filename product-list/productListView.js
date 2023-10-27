export const emptyProducts = () => {
  return `
        <h3 class="product-fail">No hay productos disponibles, disculpa las molestias.</h3>
        `;
};


// Falta por refactorizar:
export const buildProduct = (product) => {
  return `
        <div class="card-product">
          <a href="./tweet-detail.html?id=${product.id}">
            <figure>
              <img src="${product.image}" alt='${product.name}'onerror="this.src='assets/no-image-available.png';"/>
            </figure>
          </a>
          <p>Descripcion: ${product.message}</p>
          <p>Precio: ${product.price}€</p>
          <p>Tipo de producto: ${product.type}</p>
        </div>
  `;
};