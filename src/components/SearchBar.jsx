import { useState } from 'react';
import styled from 'styled-components';

const SearchGroup = styled.div `
   display: flex;
   justify-content: center;
   padding-top: 1vw; 

`

const Input = styled.input`
   width: 15vw;
   height: 3vw;
   padding: 0 1rem;
   color: #fff;
   font-size: 1vw;
   border: .1vw solid #1B9880;
   border-radius: .5vw 0 0 .5vw;
   background-color: transparent;
   outline: none;

   &:hover {
      border: .1vw solid #2CE8C4;
   }


`

const Button = styled.button`
   width: 7.5vw;
   height: 3vw;
   padding: .5em 1em;
   border: none;
   border-radius: 0 .5vw .5vw 0;
   background-color: #1B9880;
   color: #fff;
   font-size: 1.25vw;
   cursor: pointer;
   transition: background-color .3s ease-in-out;
 
 
 &:hover {
   background-color: #2CE8C4;
 }
`

export default function SearchBar(props) {
   const [characters, setCharacters] = useState ("");
   const handleInputChange = (event) => {
      const {value} = event.target;
      setCharacters (value);

   }

   
   
   return (
      <SearchGroup>
         <Input type='search' onChange={handleInputChange}/>
         <Button onClick={() => props.onSearch(characters)}
         >Agregar</Button>
      </SearchGroup>
   );
   
}
