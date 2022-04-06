import React from "react"
import { Link } from "react-router-dom"


export const NavBar = () => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">SonicQuizHome</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/amy">Amy Rose</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/knuckles">Knuckles</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/sonic">Sonic</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/tails">Tails</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/shadow">Shadow</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/robotnik">Robotnik</Link>
            </li>
        </ul>
    )
}