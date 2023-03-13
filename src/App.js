import './App.css';
import Nav from './components/Nav/Nav.jsx';
import Cards from './components/Cards/Cards.jsx';
import Abaut from './components/Abaut/Abaut.jsx';
import Detail from './components/Detail/Detail.jsx';
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";





function App() {
  const [characters, setCharacters] = useState([]);


  const onSearch = (id) => {
    // Primero, verificamos si el ID del personaje a agregar ya existe en la lista.
    const existingChar = characters.find(char => char.id.toString() === id.toString());
    if (existingChar) {
      alert("Este personaje ya fue agregado.");
      return;
    }

    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
        data.name ? setCharacters([...characters, data]) :
          alert("Id Invalido")
      })
      .catch((error) => console.log(error));
  };

  const onClose = (id) => {
    const filtered = characters.filter((char) => char.id !== id);
    setCharacters(filtered)
  }

  return (
    <div className='App' style={{ padding: '25px', paddingTop: '10px' }}>
      <div>
        <Nav onSearch={onSearch} />
      </div>
      <hr />
      <Routes>
        <Route path='/home' element={<Cards
          characters={characters} onClose={onClose}
        />} />
        <Route path='/detail/:detailId' element={<Detail/>}/>
        <Route path='/abaut' element={<Abaut/>}/>
      </Routes>
      <hr />

    </div>
  )
}

export default App
