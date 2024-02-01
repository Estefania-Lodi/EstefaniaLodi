import React, { useState } from 'react';
import './navBarStyled.css';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

function Navbar({ onSelectCategory }) {

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onSelectCategory(category);
  };

  const handleInicioClick = () => {
    setSelectedCategory(null);
    onSelectCategory(null);
  };

  return (
    <div className='navBar'>


        <li><Link to="/" onClick={handleInicioClick}>Inicio</Link></li>
        <li onClick={() => handleCategoryClick('cremas')}><Link to="/cremas">Cremas</Link></li>
        <li onClick={() => handleCategoryClick('maquillajes')}><Link to="/maquillajes">Maquillajes</Link></li>
        <li onClick={() => handleCategoryClick('exfoliantes')}><Link to="/exfoliantes">Exfoliantes</Link></li>
      

      <CartWidget number={7} />
    </div>
  );
}

export default Navbar;