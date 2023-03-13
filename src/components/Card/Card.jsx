import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const DivCard = styled.div`
    position: relative;
    width: 15vw;
    height: 24vw;
    background-color:  #ffffff6e;
    margin: 1em;
    border-radius: 2vw;
    box-shadow:
      inset 0 -3em 3em rgba(0,0,0,0.12),
      0.3em 0.3em 1em rgba(0,0,0,0.8);
   transform: scale(0.85);
   transition: all .3s;

   &:hover {
      transform: scale(1);
   } 
`


const DivDatos = styled.div`

   display: flex;
   justify-content: center;
   align-items: center;
   height: 4.9vw;
   background-color: #1B9880;
   border-radius: 0px 0px 2vw 2vw;
   transition: all .3s;
   
`

const H2Datos = styled.h2`
   padding: 0vw 1.5vw; 
   font-size: 1.3vw;
   margin-top: 0.5vw;
   transition: all .3s;
`

const H2DatosD = styled.h2`
   display: flex;
   padding: 0vw;
   margin: 0vw;
   margin-left: 0.5vw;
   font-size: 0.7vw;
   transition: all .3s;   
`

const H2Name = styled.h2`
   margin: 1vw;
   margin-top: 0.3vw;
   font-size: 1.5vw;
   transition: all .3s;  
`
const H2NameN = styled.h2`
   display: flex;
   padding: 0vw;
   margin: 0vw;
   margin-left: 0.5vw;
   margin-bottom: 0.3vw;
   font-size: 0.7vw;
   transition: all .3s;
`

const ButtonClose = styled.button`
   padding: 1vw 1vw;
   position: absolute;
   left: 12.4vw;
   font-weight: bold;
   background-color: transparent;
   background-image: none;
   border-radius: 0px 2vw 0px 1vw;
   font-size: 1vw;
   transition: all .3s;
   border: none;
   cursor: pointer;  
   
   &:hover {
      background-color: #F96B4C;
      background-image: -webkit-linear-gradient(#F96B4C, #F23182);
      background-image: linear-gradient(#F96B4C, #F23182);     
   }
`

const ImgCard = styled.img`
   width: 15vw;
   border-radius: 2vw 2vw 0px 0px;
   transition: all .3s;
`
const LinkGlobal = styled(Link)`
   text-decoration: none;
   color: black;
   `



export default function Card(props) {
   return (

      <DivCard>
         <ButtonClose onClick={props.onClose}>X</ButtonClose>
         <LinkGlobal to={`/detail/${props.id}`}>
            <ImgCard src={props?.image} alt="imagen no encontrada" />
            <div>
               <H2NameN>Name</H2NameN>
               <H2Name>{props.name}</H2Name>
            </div>
            <DivDatos>
               <div>
                  <H2DatosD>Gender</H2DatosD>
                  <H2Datos>{props.gender}</H2Datos>
               </div>
               <div>
                  <H2DatosD>Species</H2DatosD>
                  <H2Datos>{props.species}</H2Datos>
               </div>
            </DivDatos>
         </LinkGlobal>
      </DivCard>

   );
}
