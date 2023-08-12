import { Caption } from "../../components/Caption";
import { CardAccount } from "../../components/CardAccount";
import { CardPrice } from "../../components/CardPrice";
import { HeaderPageMenu } from "../../components/HeaderPageMenu";
import { RequestButton } from "../../components/RequestButton";
import { Container } from "../Menu/styles";

export function Pedido() {
    return (
        <Container>
            <HeaderPageMenu />
            <Caption />
            <CardAccount />
            <CardPrice />
            <RequestButton urlPage="/tempodopedido" caption="Confirmar pedido" />
        </Container>
    )
}
