import styled from "styled-components"

export const Container = styled.section`   
    width: 100%;
    min-height:100vh;
    margin: 0 auto;
    padding: 0 1.5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme['color-3']};
    @media ( (min-width: 400px) ) {
        max-width: 90%;
        align-items: first baseline;
    }
    @media ( (min-width: 768px) ) {
        max-width: 60%;       
        align-items: first baseline;
    } 
`;
