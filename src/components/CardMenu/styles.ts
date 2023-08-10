import styled from 'styled-components'

export const CardContainer = styled.div`   
    width: 175px;
    height: 175px;
    border-radius: 14px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
`;

export const CardImage = styled.div`
    width: 115%;
    height: 115%;
    object-fit: cover;
`;
export const TitleFood = styled.div`   
    text-align: center;
    width: 100%;
    background-color: ${props => props.theme['color-9']};
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 3rem;
    position: absolute;
    top: 40%;
`;