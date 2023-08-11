import { NavLink } from 'react-router-dom'
import { Sidebar } from "./styles"
import { HouseSimple } from 'phosphor-react'

export function HeaderPageMenu() {
    return (
        <Sidebar>
            {/* "nameLunch" */}

            {/* "homeLogo linkHover"> */}
            <nav>
                <p></p>
                <NavLink to="/" title="Home">
                    <HouseSimple />
                </NavLink>
            </nav>
        </Sidebar>
    )
}