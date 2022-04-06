import React from "react";
import { Link } from "react-router-dom"

export const SonicQuizHome = () => (
    <>
        <h2>Which Sonic Character Are You?</h2>
        <h3>Take the Quiz to Find Out!</h3>
       
        <li className="navbar__item">
                <Link className="navbar__link" to="/quiz">Start My Quiz</Link>
        </li>
    </>
)