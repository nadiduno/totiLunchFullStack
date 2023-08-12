import { Header } from "../../components/Header";
import { OptionMenu } from "../../components/OptionMenu";
import { Container } from "./styles";

export function Homepage() {
    return (
        <Container>
            <Header />
            <OptionMenu />
        </Container>
    )
}