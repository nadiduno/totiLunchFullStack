import styled from 'styled-components'

export const CaptionContainer = styled.div`   
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${props => props.theme['white']};
    color:${props => props.theme['black']};
    /* @media ( (min-width: 768px) ) {
        width:70%;
    } */

`;

export const Arrow = styled.div`   
    color:${props => props.theme['black']};
    margin: 0 2rem;
    display:flex;
    justify-content:center;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;


export const CaptionFood = styled.p`   
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 2rem;
`;

export const ColorIcono = styled.span`   
    color:${props => props.theme['black']};
`;

