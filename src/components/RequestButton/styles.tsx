import styled from 'styled-components'

export const ButtonMain = styled.header`   
    width: 90%;
    height: 3.125rem;
    border-radius: 8px;
    background: ${props => props.theme['color-5']};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1.875rem;
    border: 1px solid transparent;
    color:${props => props.theme['white']};
`;

export const TextColor = styled.p`   
    color:${props => props.theme['white']};
    font-weight:bold;
`;
