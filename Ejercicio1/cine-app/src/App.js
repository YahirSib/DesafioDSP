import React, { useState } from 'react';
import './App.css';
import Select from './components/Select';
import Listado from './components/PeliculasList';
import data from './data.json';

function App() {
  const [targetOption, setTargetOption] = useState('');
  const [entradas, setEntradas] = useState([]);
  const [totalPrecio, setTotalPrecio] = useState(0);

  const handleSelectChange = e => {
    setTargetOption(e.target.value);
  };

  const handleAddEntrada = () => {
    const selectedPelicula = data.find(peli => peli.nombre === targetOption);

    if (selectedPelicula) {
      const newItem = { ...selectedPelicula, cantidad: 1 };
      setEntradas([...entradas, newItem]);
      setTotalPrecio(totalPrecio + selectedPelicula.precio);
    }
  };

  const handleDeleteEntrada = index => {
    const deletedEntrada = entradas[index];
    setEntradas(entradas.filter((_, i) => i !== index));
    setTotalPrecio(totalPrecio - deletedEntrada.precio * deletedEntrada.cantidad);
  };

  const handleCantidadChange = (index, newCantidad) => {
    const updatedEntradas = [...entradas];
    updatedEntradas[index].cantidad = parseInt(newCantidad, 10);
    setEntradas(updatedEntradas);

    const updatedTotal = updatedEntradas.reduce(
      (total, entrada) => total + entrada.precio * entrada.cantidad,
      0
    );
    setTotalPrecio(updatedTotal);
  };

  return (
    <div className="app">
      <h1>Lista de Compras de Películas</h1>
      <form onSubmit={e => e.preventDefault()}>
      <Select
        options={data}
        targetOption={targetOption}
        onChange={handleSelectChange}
      />
      <button onClick={handleAddEntrada}>Agregar</button>
      <Listado
        peliculas={entradas}
        onDeletePelicula={handleDeleteEntrada}
        onCantidadChange={handleCantidadChange}
      />
      <p>Total Precio: ${totalPrecio.toFixed(2)}</p>
      </form>
    </div>
  );
}

export default App;
