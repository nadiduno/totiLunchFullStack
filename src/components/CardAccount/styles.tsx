import styled from 'styled-components'

export const OrderBox = styled.div`   
    width: 90%;
    height: 17.938rem;
    border-radius: 12px;
    border: 1px solid ${props => props.theme['color-8']};
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 5px 5px 4px 0px rgba(252, 252, 252, 0.25);
    margin: 1.25rem;
    font-size: 1.5rem;
`;

export const ListOrder = styled.div`   
    width: 100%;
    padding: 2rem;
`;

export const Payment = styled.div`   
    display: flex;
    justify-content: space-between;
    padding: 0 1.125rem;
`;