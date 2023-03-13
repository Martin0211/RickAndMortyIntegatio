import styled from 'styled-components';
import { useParams, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const DivContainer = styled.div`
display:  flex;
align-items: center;
justify-content: center;

`

export default function Detail(props) {

  const { detailId } = useParams();

  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return ()=> setCharacter({});
  }, [detailId]);

  return (
    <DivContainer>
      <div>
        <h1>{character.name}</h1>
        <h1>Status: {character.status}</h1>
        <h1>Gender: {character.gender}</h1>
        <h1>Specie: {character.species}</h1>
        <h1>Status: {character.status}</h1>
        <h1>Origin: {character.origin?.name}</h1>
        <h1>Location: {character.location?.name}</h1>
      </div>
      <img src={character.image} alt="" />
    </DivContainer>

  )
};