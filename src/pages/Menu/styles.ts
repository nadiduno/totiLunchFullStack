import styled from 'styled-components'

export const Container = styled.div`   
    max-width: 100%;
    width: 100%;
    min-height:100vh;
    margin: 0 auto;
    padding: 0 1rem; 
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.theme['color-3']};
    @media ( (min-width: 400px) ) {
        max-width: 70%;       
        justify-items:center;
    }
    @media ( (min-width: 768px) ) {
        max-width: 40%;       
        justify-items:center;
        
    }
`;