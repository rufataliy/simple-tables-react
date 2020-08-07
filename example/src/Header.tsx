import React from "react"
import { Link } from "react-router-dom"
import "./styles/header.css"

export const Header = () => {
    return (
        <div className="header">
            <ul>
                <li><Link to="/withLink">link</Link></li>
                <li><Link to="/withIcons">Icons</Link></li>
                <li><Link to="/checkbox">Checkbox</Link></li>
                <li><Link to="background">Background</Link></li>
            </ul>
        </div>
    )
}