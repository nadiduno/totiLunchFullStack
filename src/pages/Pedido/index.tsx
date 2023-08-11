import { Caption } from "../../components/Caption";
import { CardAccount } from "../../components/CardAccount";
import { CardPrice } from "../../components/CardPrice";
import { HeaderPageMenu } from "../../components/HeaderPageMenu";
import { RequestButton } from "../../components/RequestButton";

export function Pedido() {
    return (
        <>
            <HeaderPageMenu />
            <Caption />
            <CardAccount />
            <CardPrice />
            Confirmar
            <RequestButton urlPage="/tempodopedido" caption="Confirmar pedido" />
        </>
    )
}