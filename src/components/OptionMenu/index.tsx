import { CardMenu, FoodCardType } from "../CardMenu"
import { ContainerOpc } from "./styles"

const foodcards: FoodCardType[] = [
    {
        id: 1,
        title: 'Carne',
        urlFood: 'https://github.com/nadiduno/totiLunch/blob/main/assets/carnes.jpeg?raw=true',
        urlPage: '#'
    },
    {
        id: 2,
        title: 'Massas',
        urlFood: 'https://github.com/nadiduno/totiLunch/blob/main/assets/massas.jpg?raw=true',
        urlPage: '#'
    },
    {
        id: 3,
        title: 'bebidas',
        urlFood: 'https://github.com/nadiduno/totiLunch/blob/main/assets/bebidas.jpg?raw=true',
        urlPage: '#'
    },
    {
        id: 4,
        title: 'frios',
        urlFood: 'https://github.com/nadiduno/totiLunch/blob/main/assets/frios.jpg?raw=true',
        urlPage: '#'
    },
    {
        id: 5,
        title: 'sorvetes',
        urlFood: 'https://github.com/nadiduno/totiLunch/blob/main/assets/sorvetes.jpg?raw=true',
        urlPage: '#'
    },
    {
        id: 6,
        title: 'sobremesas',
        urlFood: 'https://github.com/nadiduno/totiLunch/blob/main/assets/sobremesas.jpg?raw=true',
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