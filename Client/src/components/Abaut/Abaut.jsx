import React from 'react';
import styled from 'styled-components';
import Foto from '../Abaut/yo.jpg'

const AbautH3 = styled.h3`
color: white;
`
const ImgFoto = styled.img`
width:15vw;

border-radius: 999vw;
`

export default function Nav(props) {
    return (
        <div>
            <ImgFoto src={Foto} alt="not found" />
            <AbautH3>
                Bienvenido a la aplicación web de 'Rick and Morty' creada por Martin Balnco mejor conocido como Mr.White. Soy un desarrollador apasionado y comprometido que está actualmente participando en el Bootcamp de programación de Soy Henry. Esta aplicación web es el resultado de mi deseo de practicar y mejorar mis habilidades en el desarrollo web, mientras que también satisface mi interés en la popular serie animada 'Rick and Morty'.
                <br />
                <br />

                A través de esta aplicación, podrás explorar de manera fácil y rápida información detallada sobre los personajes de la serie. 
                <br /><br />
                
                Como parte de mi formación en el Bootcamp, he adquirido conocimientos en tecnologías modernas de desarrollo web como JavaScrip, React, Redux, CSS, HTML y otras herramientas que he utilizado para crear esta aplicación. <br /><br />

                Además de mi experiencia en el desarrollo web, también tengo años de experiencia en el área de modela 3D e imprecion 3D, mercadeo, marketing digital, ventas e impulso de productos, así como en reparación y mantenimiento de equipos electrónicos y redes. Estoy constantemente actualizando mis conocimientos y habilidades, y la creación de esta aplicación es una oportunidad para aplicar todo lo que he aprendido.
                <br /><br />

                Espero que disfrutes usando nuestra aplicación web y descubriendo más sobre los personajes de 'Rick and Morty'. No dudes en contactarme si tienes alguna pregunta o comentario. ¡Gracias por visitarnos!
            </AbautH3>
        </div>
    )
};