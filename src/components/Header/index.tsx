import { LogoTop, MenuContainer } from './styles'
import logoTotiLunch from '../../assets/logoTotiLunch.svg'


export function Header() {
    return (
        <MenuContainer>
            <LogoTop>
                <img src={logoTotiLunch} alt="" />
            </LogoTop>
        </MenuContainer>
    )
}