import styled from 'styled-components'

export const Sidebar = styled.header`   
    width: 100%;
    height: 4.438rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid var(--color4);
    display: flex;
    justify-content: space-between;
    padding: 0 14px;
    border-bottom: 1px solid ${props => props.theme['color-4']};
    margin-bottom: 2rem;
`;

export const TextMain = styled.p`   
    text-align: center;
    font-family: Roboto;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

export const StileButton = styled.div`   
    color:${props => props.theme['white']};
`;




