import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = ({ products }) => {
  const { id } = useParams();

  const getProductById = (productId) => {
    return products.find((product) => product.id.toString() === productId);
  };

  const product = getProductById(id);

  if (!product) {
    return (
      <div>
        <p>Producto no encontrado.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>{product.nombre}</h2>
      <div>
        <img src={product.imagen} alt={product.nombre} />
      </div>
      <div>
        <p>{product.descripcion}</p>
        <p>Precio: ${product.precio}</p>
        {/* Agregar más detalles  */}
      </div>
    </div>
  );
};

export default ProductDetail;