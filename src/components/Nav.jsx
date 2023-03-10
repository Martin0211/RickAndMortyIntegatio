import styled from 'styled-components';
import SearchBar from './SearchBar.jsx';
import Logo from './Logo.jsx';

const DivNav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`


export default function Nav(props) {
    return (
        <DivNav>
            <Logo/>
            <SearchBar
            onSearch={props.onSearch}
            />
        </DivNav>
    )
};