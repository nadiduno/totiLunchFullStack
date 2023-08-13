import { HeaderPageMenu } from "../../components/HeaderPageMenu";
import { OrderSquare } from "../../components/OrderSquare";
import { OrderTimer } from "../../components/OrderTimer";
import { Container } from "../Menu/styles";


export function Time() {
    return (
        <Container>
            <HeaderPageMenu />
            <OrderSquare />
            <OrderTimer />
        </Container>
    )
}