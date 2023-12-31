import styled from 'styled-components'

export const Wait = styled.div`   
    display: block;
    align-items: center;
    margin-top: 2.875rem;
    font-size: 1.5rem;
`;

export const TextCount = styled.strong`   
    color:${props => props.theme['color-5']};
    display: flex;
    justify-content: center;
    margin-top: .5rem;
    @media ( (max-width: 400px) ) {
        padding-bottom:4rem;
    }
`;

