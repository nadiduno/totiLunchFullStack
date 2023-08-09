import styled from 'styled-components'

export const ContainerOpc = styled.section`   
    width:80%;
    max-width: 370px;
    height: 25vh;
    margin: 1rem auto 0px;
    margin: 0 auto;
    display: grid;
    grid-template-columns:repeat(3,1fr);
    justify-content:center;
    align-items:center;
    justify-items:center;
    gap: .625rem;
    margin: 0px auto;
`;

export const BoxImag = styled.div`   
    border: 1px solid ${props => props.theme['white']};
    width: 100%;
    padding: 0.25rem;
`;

