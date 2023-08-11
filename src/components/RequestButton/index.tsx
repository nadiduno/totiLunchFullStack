import { NavLink } from 'react-router-dom'
import { ButtonMain } from "./styles";

export interface ButtonProps {
    caption: string;
    urlPage: string;
}

export function RequestButton(props: ButtonProps) {
    return (
        <ButtonMain className="linkHover">
            <nav>
                <p>{props.urlPage}</p>
                <NavLink to={props.urlPage} title={props.caption}>
                    <span>{props.caption}</span>
                </NavLink>
            </nav>
        </ButtonMain>
    )
}