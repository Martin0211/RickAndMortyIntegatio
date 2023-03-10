import styled from 'styled-components';

const ImgBaner = styled.img`
    display: flex;
    
    width: 20vw;

`

export default function Logo(props) {
    return(
        <ImgBaner src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1200px-Rick_and_Morty.svg.png' alt="imagen no encontrada"/>
    )};