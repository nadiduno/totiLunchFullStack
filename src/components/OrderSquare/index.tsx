import logoTotiLunch from '../../assets/logoTotiLunch.svg'
import cuscuz from '../../assets/cuscuz.svg'
import { Font2, ImgFood, Logo, TextContador, TextCount, TextOrder, Wait } from "./styles";

export function OrderSquare() {
    return (
        <>

            <Logo>
                <img src={logoTotiLunch} alt="" />
            </Logo>
            <ImgFood>
                <img src={cuscuz} alt="" />
            </ImgFood>
            <Font2>
                Obrigada
            </Font2>
            <TextOrder>
                Seu pedido estÃ¡ sendo preparado
            </TextOrder>

        </>
    )
}