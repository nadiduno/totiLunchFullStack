import styled from "styled-components"

export const Container = styled.section`   
    max-width: 100%;
    height:100vh;
    margin: 0 auto;
    padding: 1rem 1.5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme['color-3']};
    @media ( (min-width: 400px) ) {
        max-width: 70%;
        min-height: calc(100vh + 50px);
    }
    @media ( (min-width: 768px) ) {
        max-width: 40%;       
        align-items: first baseline;
    }
`;



export const Csontainer = styled.div`   
    max-width: 100%;
    margin:0 auto;
    padding: 0 .5rem; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 1.5rem;
    background-color: ${props => props.theme['color-3']};
    
`;