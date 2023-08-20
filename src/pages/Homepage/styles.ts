import styled from "styled-components"

export const Container = styled.section`   
    width: 100%;
    max-width: 80%;
    min-height:100vh;
    /* margin: 0 auto; */
    padding: 0 1.5rem;
    /* display: grid;
   grid-template-columns: 1fr; */
    /* align-items: center; */
    
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme['color-3']};
    @media ( (min-width: 400px) ) {
        /* align-items: first baseline; */
    }
    @media ( (min-width: 768px) ) {
        /* max-width: 70%;        */
        /* align-items: first baseline; */
    } 

`;