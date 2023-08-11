import { NavLink } from 'react-router-dom'
import { Sidebar, StileButton, TextMain } from "./styles"
import { House } from 'phosphor-react'

export function HeaderPageMenu() {
    return (
        <Sidebar>
            <TextMain>
                TotiLunch
            </TextMain>
            <nav>
                <NavLink to="/" title="Home">
                    <StileButton>
                        <House size={34} className='color-000' />
                    </StileButton>
                </NavLink>
            </nav>
        </Sidebar>
    )
}