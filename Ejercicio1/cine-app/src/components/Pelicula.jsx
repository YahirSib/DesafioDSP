import React from 'react';

const Elemento = ({ elemento, onDeleteElemento, onCantidadChange }) => {
  return (
    <div className="item">
      <span>{elemento.nombre} - ${elemento.precio}</span>
      <input
        type="number"
        value={elemento.cantidad}
        onChange={e => onCantidadChange(e.target.value)}
      />
      <button onClick={onDeleteElemento}>Eliminar</button>
    </div>
  );
};

export default Elemento;
