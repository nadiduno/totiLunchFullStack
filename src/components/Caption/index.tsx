import { ArrowLeft, ArrowRight } from "phosphor-react"
import { Arrow, CaptionContainer, CaptionFood } from "./styles"

// export interface captionMeType {
//     id: number
//     caption: string
//     urlprevious: string
//     urlnext: string
// }
// interface captionProps {
//     captionprop: captionMeType
// }
//   export function ApplicationMe({ appme }: AppProps) 

export function Caption() {
    return (
        <CaptionContainer>
            <Arrow className="linkHover">
                <ArrowLeft size={24} />
            </Arrow >
            <CaptionFood>
                Carnes
                {/* {foodcard.title} */}
            </CaptionFood>
            <Arrow className="linkHover">
                <ArrowRight size={24} />
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