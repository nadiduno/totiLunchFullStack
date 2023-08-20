import { Caption } from "../../components/Caption";
import { CardFood } from "../../components/CardFood";
import { HeaderPageMenu } from "../../components/HeaderPageMenu";
import { RequestButton } from "../../components/RequestButton";

import { Container } from "./styles";


import { useContext } from 'react'
import { FoodContext } from "../../components/CardMenu";

// interface MenuProps {
//     id: number // O id do foodcard que você passou como prop na rota
// }


/*const menuProp: MenuProps[] = [
    {
        id: 1,
        captionPage: 'Carne'
    },
    {
        id: 2,
        captionPage: 'Massa'
    },
    {
        id: 3,
        captionPage: 'Bebidas'
    },
    {
        id: 4,
        captionPage: 'Frios'
    },
    {
        id: 5,
        captionPage: 'Sorvetes'
    },
    {
        id: 6,
        captionPage: 'Sobremesas'
    },
]*/

export function Menu() {
    // const selectedFoodcard = useContext(FoodContext)

    return (
        <Container>
            <HeaderPageMenu />
            <Caption captionPage="Canes" />
            <CardFood />
            <CardFood />
            <CardFood />
            <CardFood />
            <RequestButton urlPage="/pedido" caption="Fazer Pedido" />
            {/* <p>O id do foodcard é {selectedFoodcard?.id}</p> */}
            { }
        </Container>
    )
}