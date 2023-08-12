import styled from 'styled-components'

export const OrderDetails = styled.div`   
    width: 90%;
    height: 11.563rem;
    border: 3px solid ${props => props.theme['color-4']};
    padding: 1.375rem;    
`;

export const Details1 = styled.div`   
    padding: .5rem;
    margin-bottom: 2.125rem;
`;

export const BordBall = styled.div`   
    width: 52px;
    height: 20px;
    border-radius: 20px;
    border: 1px solid ${props => props.theme['white']};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2px;
    margin-top: .5rem;
`;

export const OptionPay = styled.div`   
    display: inline-flex;
    gap: 2rem;
    justify-content: space-between;
    align-items: center;
    margin-top: .5rem;
`;

export const OptionPay2 = styled.div`   
    display: flex;
    gap: .25rem;
`;

export const Ball = styled.div`   
    width: 18px;
    height: 18px;
    border-radius: 100%;
    background: ${props => props.theme['white']};
`;

export const Option = styled.div`   
    font-size: .75rem;
    color: ${props => props.theme['color-8']};
`;