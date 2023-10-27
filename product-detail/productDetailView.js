// Opcion del profesor:
export const buildProduct = (product) => {
  let template = `
  <div class="card-product" id="card-product">
    <figure>
      <img src="${product.image}" alt='${product.name}'onerror="this.src='assets/no-image-available.png';"/>
    </figure>
    <p>${product.name}</p>
    <p>${product.price}€</p>
    <p>Tipo de producto: ${product.type}</p>
    <p>Descripción: ${product.message}</p>
  </div>
  `;

  return template;
};