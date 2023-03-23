import './App.css';
import Nav from './components/Nav/Nav.jsx';
import Cards from './components/Cards/Cards.jsx';
import Abaut from './components/Abaut/Abaut.jsx';
import Detail from './components/Detail/Detail.jsx';
import Form from './components/Form/Form.jsx'
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";





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

  const location = useLocation();
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const username = 'ejemplo@gmail.com'
  const password = 'Ejemplo1$'

  const login = (userData) => {
    if (userData.password === password &&  userData.username === username) {
      setAccess(true);
      navigate('/home');
   } else window.alert("Usuario no registrado");
  }

  useEffect(() => {
    !access && navigate('/');
 }, [access, navigate]);

  return (
    <div className='App' style={{ padding: '25px', paddingTop: '10px' }}>
      <div>
        {location.pathname === '/'? null : <Nav onSearch={onSearch} />}
      </div>
      <hr />
      <Routes>
      <Route path='/' element={<Form login={login} />}/>
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
