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


export function CardMenu({ foodcard }: FoodProps) {
    return (
        <CardContainer className="linkHover">
            <nav>
                <NavLink to="/menu" title={foodcard.title}>
                    <TitleFood className="linkHover">
                        {foodcard.title}
                    </TitleFood>
                    <CardImage>
                        <img src={foodcard.urlFood} alt="" />
                    </CardImage>
                </NavLink>
            </nav>
        </CardContainer>
    )
}