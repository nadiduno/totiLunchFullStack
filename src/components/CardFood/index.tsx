import { Minus, Plus } from "phosphor-react"
import { ButtoFood, ButtoSmall, Card, CardValor, ContainerText, DescFood, FoodBox, ImgFood, ImgSmall, InfoFood, Text2, Text3, Valor, ValorTotal } from "./styles"
export function CardFood() {
    return (
        <FoodBox>
            <ImgFood>
                <ImgSmall>
                    <img src="https://github.com/nadiduno/totiLunchFullStack/blob/main/src/assets/carnes.svg?raw=true" alt="" />
                </ImgSmall>
            </ImgFood>
            <ContainerText>
                <Text2>Carne 1</Text2>
                <Text3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Text3>
            </ContainerText>
            <InfoFood>
                <DescFood>
                    <Valor>
                        R$ 00,00
                    </Valor>
                    <CardValor>
                        <Card>
                            X
                        </Card>
                        <div className="card">
                            0
                        </div>
                    </CardValor>
                    <ValorTotal>
                        R$ 00,00
                    </ValorTotal>
                </DescFood>
                <ButtoFood>
                    <ButtoSmall className="linkHover">
                        <Plus size={24} alt="Aumentar" />
                    </ButtoSmall>
                    <ButtoSmall className="linkHover">
                        <Minus size={24} alt="Aumentar" />
                    </ButtoSmall>
                </ButtoFood>

            </InfoFood>
        </FoodBox>
    )
}

{/* <Arrow className="linkHover"> */ }