import { ArrowLeft, ArrowRight } from "phosphor-react"
import { Arrow, CaptionContainer, CaptionFood, ColorIcono } from "./styles"

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
                <ColorIcono>
                    <ArrowLeft size={24} />
                </ColorIcono>
            </Arrow >
            <CaptionFood>
                Carnes
                {/* {foodcard.title} */}
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