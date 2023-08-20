import { ArrowLeft, ArrowRight } from "phosphor-react"
import { Arrow, CaptionContainer, CaptionFood, ColorIcono } from "./styles"

// import { createContext, useContext } from 'react'



export interface CaptionProps {
    captionPage: string;
}
export function Caption({ captionPage }: CaptionProps) {
    // const {FoodCardType} = useContext(FoodContext)

    return (
        <CaptionContainer>
            <Arrow className="linkHover">
                <ColorIcono>
                    <ArrowLeft size={24} />
                </ColorIcono>
            </Arrow >
            <CaptionFood>
                {captionPage}
            </CaptionFood>
            <Arrow className="linkHover">
                <ColorIcono>
                    <ArrowRight size={24} />
                </ColorIcono>
            </Arrow>
        </CaptionContainer >
    )
}

{/* <CardContainer className="linkHover">
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
</CardContainer> */}