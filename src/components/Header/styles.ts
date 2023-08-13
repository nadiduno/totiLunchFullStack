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
    @media ( (min-width: 400px) ) {
        max-width: 50%;
    }
    @media ( (min-width: 768px) ) {
        max-width: 50%;
        margin-top:1.5rem;       
    }
`;