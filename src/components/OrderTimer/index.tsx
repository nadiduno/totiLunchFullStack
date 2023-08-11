import { TextCount, Wait } from "./styles";

export function OrderTimer() {
    return (
        <>
            <Wait>
                t
                {/* <TextOrder> Tempo aproximado</TextOrder> */}
                <TextCount> 00 minutos</TextCount>
            </Wait>
        </>
    )
}