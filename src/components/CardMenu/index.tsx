import { createContext, useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'

import { CardContainer, CardImage, TitleFood } from "./styles";

export interface FoodCardType {
    id: number
    title: string
    urlFood: string
    urlPage: string
}
interface FoodProps {
    foodcard: FoodCardType
}
// const FoodContext = createContext({
//     FoodCardType = 
// })

// Context API

export const FoodContext = createContext<FoodCardType | null>(null)

export function CardMenu({ foodcard }: FoodProps) {

    const [selectedFoodcard, setSelectedFoodcard] = useState<FoodCardType | null>(null)


    const handleClick = () => {
        setSelectedFoodcard(foodcard)
        console.log(foodcard)
        console.log(selectedFoodcard)
    }
    console.log(selectedFoodcard)
    console.log(setSelectedFoodcard)

    return (

        // < FoodContext.Provider value={selectedFoodcard} >
        <CardContainer className="linkHover">
            <nav>
                <NavLink to="/menu" title={foodcard.title} onClick={handleClick}>
                    <TitleFood className="linkHover">
                        {foodcard.title}
                    </TitleFood>
                    <CardImage>
                        <img src={foodcard.urlFood} alt="" />
                    </CardImage>
                </NavLink>
            </nav>
        </CardContainer>
        // </FoodContext.Provider >
    )
}