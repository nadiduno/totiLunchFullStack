import styled from 'styled-components'

export const FinishDetails = styled.div`   
    width: 90%;
    border: 3px solid ${props => props.theme['color-4']};
    display: grid;
    justify-content: center;
    justify-items:center;
    align-items: center;
    padding: 2rem;
`;

export const Logo = styled.div`   
    width:60%;
    height:60%;
`;

export const ImgFood = styled.div`   
    width:30%;
    height:30%;
`;
export const Font2 = styled.p`   
    color: ${props => props.theme['color-4']};
    font-family: 'Shalimar', cursive;
    -webkit-font-smoothing: antialiased;
    font-size: 5rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    justify-content: center;
    padding-top: 2rem;
`;

export const TextOrder = styled.p`   
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 4rem;
`;