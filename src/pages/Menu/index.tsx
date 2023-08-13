import { Caption } from "../../components/Caption";
import { CardFood } from "../../components/CardFood";
import { HeaderPageMenu } from "../../components/HeaderPageMenu";
import { RequestButton } from "../../components/RequestButton";
import { Container } from "./styles";

// const appsme: AppMeType[] = [
//     {
//         id: 1,
//         title: 'Toti Lunch',
//         about: 'Cardápio Digital',
//     },
// ]

export function Menu() {
    return (
        <Container>
            <HeaderPageMenu />
            <Caption />
            {/* <ApplicationMe key={appme.id} appme={appme} /> */}
            <CardFood />
            <CardFood />
            <CardFood />
            <RequestButton urlPage="/pedido" caption="Fazer Pedido" />
        </Container>
    )
}
