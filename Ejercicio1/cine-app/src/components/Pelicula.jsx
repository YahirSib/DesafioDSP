import React from 'react';

const Elemento = ({ elemento, onDeleteElemento, onCantidadChange }) => {
  return (
    <div className="item">
      <span className='titulo'>{elemento.nombre} - ${elemento.precio}</span>
      <input className='input-cant'
        type="number"
        value={elemento.cantidad}
        onChange={e => onCantidadChange(e.target.value)}
      />
      <button className='cerrar' onClick={onDeleteElemento}>X</button>
    </div>
  );
};

export default Elemento;
