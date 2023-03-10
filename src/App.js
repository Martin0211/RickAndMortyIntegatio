import './App.css'
import Nav from './components/Nav.jsx'
import Cards from './components/Cards.jsx'
import { useState } from 'react'




function App () {
    const [characters, setCharacters] = useState ([]);
    

    const onSearch = (id) => {
      fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
         data.name ? setCharacters([...characters, data]):
         alert("Id Invalido")
      })
      .catch((error) => console.log(error));
    }; 

    const onClose = (id) => {
      const filtered = characters.filter((char)=> char.id !== id);
      setCharacters(filtered)
    }

  return (
    <div className='App' style={{ padding: '25px', paddingTop: '10px' }}>
      <div>
        <Nav onSearch={onSearch} />
      </div>
      <hr />
      <div>
        <Cards
          characters={characters} onClose={onClose}
        />
      </div>
      <hr />
      
    </div>
  )
}

export default App
