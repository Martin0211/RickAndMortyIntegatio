import Card from './Card';
import styled from 'styled-components';

const Container = styled.div`
   display: flex;
   justify-content: space-evenly;
   align-items: center;
   width: 100vw;   
`

export default function Cards(props) {
   
   const { characters } = props;
   return <Container>
      {characters.map(({id, name, gender, species, image }) => (
      <Card key = {id}
         name = {name}
         gender = {gender}
         species= {species}
         image = {image}
         onClose = {() => props.onClose(id)}
         
      />))}
   </Container>;
}
