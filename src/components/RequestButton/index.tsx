import { NavLink } from 'react-router-dom'
import { ButtonMain, TextColor } from "./styles";

export interface ButtonProps {
    caption: string;
    urlPage: string;
}

export function RequestButton(props: ButtonProps) {
    return (
        <ButtonMain className="linkHover">
            <nav>
                <NavLink to={props.urlPage} title={props.caption}>
                    <TextColor>
                        {props.caption}
                    </TextColor>
                </NavLink>
            </nav>
        </ButtonMain>
    )
}