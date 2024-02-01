import React from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductDetail = ({ products }) => {
  const { id } = useParams();

  const getProductById = (productId) => {
    return products.find((product) => product.id.toString() === productId);
  };

  const product = getProductById(id);

  return (
    <div className="container mt-4">
      <h2>{product.name}</h2>
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} alt={product.name} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <p>{product.description}</p>
          <p>Precio: ${product.price}</p>
          <button className="btn btn-outline-info btn-sm">
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;