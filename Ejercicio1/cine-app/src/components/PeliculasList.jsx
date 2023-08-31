import React from 'react';
import Elemento from './Pelicula';

const Listado = ({ peliculas, onDeletePelicula, onCantidadChange }) => {
  return (
    <div className="list">
      {peliculas.map((elemento, index) => (
        <Elemento
          key={index}
          elemento={elemento}
          onDeleteElemento={() => onDeletePelicula(index)}
          onCantidadChange={cantidad => onCantidadChange(index, cantidad)}
        />
      ))}
    </div>
  );
};

export default Listado;
