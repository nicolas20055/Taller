import { NavLink } from "react-router-dom"

export const ItemNav = ({contentItem = 'item', myStyle, routes = '#'}) => {
    return (
        <li className={myStyle}>
            <NavLink className={myStyle} to={routes}>{contentItem}</NavLink>
        </li>
    )
}

