import React from 'react';
import Card from '../Card/Card';
import styled from 'styled-components';

const Container = styled.div`
   /* display: flex;
   justify-content: space-evenly;
   align-items: center;
   width: 100vw;  */  

   /* display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 1rem; */

  display: flex;
  justify-content: center; /* Centra los elementos horizontalmente */
`
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap; /* Hace que los elementos salten a otra linea cuando no haya suficiente espacio */
  justify-content: center; /* Centra los elementos horizontalmente */
  max-width: 100vw; /* Ancho maximo del subcontenedor*/
`;

export default function Cards(props) {
   
   const { characters } = props;
   return <Container>
      <Wrapper>
         {characters.map(({id, name, gender, species, image }) => (
         <Card key = {id}
            id={id}
            name = {name}
            gender = {gender}
            species= {species}
            image = {image}
            onClose = {() => props.onClose(id)}
            
         />))}
      </Wrapper>
   </Container>;
}
