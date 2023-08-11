import logoTotiLunch from '../../assets/logoTotiLunch.svg'
import cuscuz from '../../assets/cuscuz.svg'
import { FinishDetails, Font2, ImgFood, Logo, TextOrder } from "./styles";

export function OrderSquare() {
    return (
        <FinishDetails>
            <Logo>
                <img src={logoTotiLunch} alt="" />
            </Logo>
            <Font2>
                Obrigada
            </Font2>
            <ImgFood>
                <img src={cuscuz} alt="" />
            </ImgFood>
            <TextOrder>
                Seu pedido está sendo preparado
            </TextOrder>
        </FinishDetails>
    )
}