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
//         urlApp: {
//             photo: 'https://github.com/nadiduno/PortfolioNadi/blob/main/.github/App9.png?raw=true',
//             deploy: 'https://toti-lunch.vercel.app/',
//             github: 'https://github.com/nadiduno/totiLunchFullStack',
//         },
//         publishedAt: new Date('2023-08-10 13:34:00'),
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
            <CardFood />
            <CardFood />
            <RequestButton urlPage="/pedido" caption="Fazer Pedido" />
        </Container>
    )
}
