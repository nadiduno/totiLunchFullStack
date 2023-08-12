import { Ball, BordBall, Details1, Option, OptionPay, OptionPay2, OrderDetails } from "./styles";

export function CardPrice() {
    return (
        <OrderDetails>
            <Details1>
                <p>Dividir a conta?</p>
                <BordBall>
                    <Ball></Ball>
                    <Option>Não</Option>
                </BordBall>
            </Details1>
            <Details1>
                <p>Forma de Pagamento</p>
                <OptionPay>
                    <OptionPay2>
                        <input type="checkbox" id="pix" name="pix" checked />
                        <p>pix</p>
                    </OptionPay2>
                    <OptionPay2>
                        <input type="checkbox" id="money" name="money" />
                        <p>Dinheiro</p>
                    </OptionPay2>
                    <OptionPay2>
                        <input type="checkbox" id="card" name="card" />
                        <p>Cartâo</p>
                    </OptionPay2>
                </OptionPay>
            </Details1>
        </OrderDetails>

    )
}