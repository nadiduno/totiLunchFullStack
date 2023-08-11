import { Caption } from "../../components/Caption";
import { CardFood } from "../../components/CardFood";
import { HeaderPageMenu } from "../../components/HeaderPageMenu";
import { RequestButton } from "../../components/RequestButton";

// const caption: ButtonCaptionType = {  caption: 'Fazer Pedido'}

export function Menu() {
    return (
        <>
            <HeaderPageMenu />
            <Caption />
            <CardFood />
            <CardFood />
            <CardFood />
            <CardFood />
            <CardFood />
            <RequestButton urlPage="/pedido" caption="Fazer Pedido" />
        </>
    )
}