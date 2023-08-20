import styled from "styled-components"

export const ContainerOpc = styled.section`   
    width:100%;
    margin: 0 1.5rem;
    padding: 4rem;
    display: grid;
    grid-template-columns:repeat(2,1fr);
    @media ( (min-width: 768px) ) {
        grid-template-columns:repeat(3,1fr);
    }
    justify-content:center;
    align-items:center;
    justify-items:center;
    gap: .725rem;
`;



