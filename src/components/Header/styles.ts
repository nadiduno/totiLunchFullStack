import styled from 'styled-components'

export const MenuContainer = styled.header`   
    margin: .25rem 0rem auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LogoTop = styled.div`   
    width:70%;
    height:70%;
    @media ( (min-width: 768px) ) {
        width:30%;
        height:30%;
        margin-bottom: .5rem;
    }
`;