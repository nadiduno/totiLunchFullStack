import { TextCount, Wait } from "./styles";

export function OrderTimer() {
    return (
        <Wait>
            <p>Tempo aproximado</p>
            <TextCount> 00 minutos</TextCount>
        </Wait>
    )
}