import { ListOrder, OrderBox, Payment } from "./styles";

export function CardAccount() {
    return (
        <OrderBox>

            <ListOrder>
                <ul>
                    <li>............................</li>
                    <li>............................</li>
                    <li>............................</li>
                    <li>............................</li>
                    <li>............................</li>
                    <li>............................</li>
                </ul>
            </ListOrder>
            <Payment>
                <p>Total</p>
                <strong>R$ 00,00</strong>
            </Payment>
        </OrderBox>
    )
}