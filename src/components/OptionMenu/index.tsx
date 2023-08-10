import { CardMenu, FoodCardType } from "../CardMenu"
import { ContainerOpc } from "./styles"

const foodcards: FoodCardType[] = [
    {
        id: 1,
        title: 'Carnes',
        urlFood: 'https://github.com/nadiduno/totiLunchFullStack/blob/main/src/assets/carnes.svg?raw=true',
        urlPage: '#'
    },
    {
        id: 2,
        title: 'Massas',
        urlFood: 'https://github.com/nadiduno/totiLunchFullStack/blob/main/src/assets/massas.svg?raw=true',
        urlPage: '#'
    },
    {
        id: 3,
        title: 'Bebidas',
        urlFood: 'https://github.com/nadiduno/totiLunchFullStack/blob/main/src/assets/bebidas.svg?raw=true',
        urlPage: '#'
    },
    {
        id: 4,
        title: 'Frios',
        urlFood: 'https://github.com/nadiduno/totiLunchFullStack/blob/main/src/assets/frios.svg?raw=true',
        urlPage: '#'
    },
    {
        id: 5,
        title: 'Sorvetes',
        urlFood: 'https://github.com/nadiduno/totiLunchFullStack/blob/main/src/assets/sorvetes.svg?raw=true',
        urlPage: '#'
    },
    {
        id: 6,
        title: 'Sobremesas',
        urlFood: 'https://github.com/nadiduno/totiLunchFullStack/blob/main/src/assets/sobremesas.svg?raw=true',
        urlPage: '#'
    },
]

export function OptionMenu() {
    return (
        <ContainerOpc>
            {foodcards.map((foodcard) => {
                return <CardMenu key={foodcard.id} foodcard={foodcard} />
            })}
        </ContainerOpc>
    )
}