import styled from 'styled-components'

export const Container = styled.div`   
    max-width: 100%;
    margin:0 auto;
    padding: 0 .5rem; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 1.5rem;
    background-color: ${props => props.theme['color-3']};
    @media ( (min-width: 400px) ) {
        max-width: 70%;       
        justify-items:center;
        padding-bottom:2rem;
    }
    @media ( (min-width: 768px) ) {
        max-width: 40%;       
        justify-items:center;
        padding-bottom:2rem;
    }
`;