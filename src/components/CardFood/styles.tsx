import styled from 'styled-components'

export const HeaderContainer = styled.header`   
    
`;

export const FoodBox = styled.div`   
    width: 90%;
    display: grid;
    grid-template-columns: 77px 1fr 84px;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    border: 1px solid var(--color6);
    background: var(--color1);
    margin: 1.125rem .35rem 0 .35rem;
    padding: .25rem;
`;

export const ImgFood = styled.div`   
    width: 4.813rem;
    height: 4.688rem;
    border-radius: 8px;
    overflow: hidden;
`;
export const ImgSmall = styled.div`   
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const ContainerText = styled.div`   
    width: 100%;
    padding: 0.25rem;
`;

export const Text2 = styled.p`   
    color: var(--color5);
`;

export const Text3 = styled.p`   
    font-size: .6rem;
    margin-top: 0.4rem;
    color: var(--color8);
`;

export const InfoFood = styled.div`   
    width: 100%;
    height: 100px;
    display: block;
    justify-content: center;
    align-items: center;    
`;

export const DescFood = styled.div`   
    width: 100%;
    border-radius: 4px;
    border: 1px solid var(--color6);
    padding: auto .125rem;
`;

export const Valor = styled.div`   
    color: var(--color7);
    text-align: right;
    font-size: .75rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    display: flex;
    justify-content: center;
`;

export const CardValor = styled.div`   
    color: var(--color3);
    text-align: right;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    display: flex;
    justify-content: center;
`;

export const Card = styled.div`   
    width: 1.375rem;
    height: 1.188rem;
    background: var(--color6);
    border-radius: 4px;
    margin: auto .175rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ValorTotal = styled.div`   
    color: var(--color5);
    text-align: right;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    display: flex;
    justify-content: center;
`;

export const ButtoFood = styled.div`   
    display: flex;
    justify-content: center;
    gap: 15px;
    padding-top: .5rem;
`;

export const ButtoSmall = styled.div`   
        width: 1.563rem;
    height: 1.563rem;
    border-radius: 5px;
    border: 1px solid var(--color8);
    background: #6D6D6D;
    box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .25rem;
`;

