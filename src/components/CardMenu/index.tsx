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
            <a href={foodcard.urlPage} target="_blank" rel="noreferrer">
                <TitleFood className="linkHover">
                    {foodcard.title}
                </TitleFood>
                <CardImage>
                    <img src={foodcard.urlFood} alt="" />
                </CardImage>
            </a>
        </CardContainer>
    )
}