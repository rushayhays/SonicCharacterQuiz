import React from "react";
import { Link } from "react-router-dom"

export const SonicQuizHome = () => (
    <>
        <h2>Which Sonic Character Are You?</h2>
        <h3>Take the Quiz to Find Out!</h3>
       
        <Link className="navbar__link" to="/quiz"><button id="quizStart">Start My Quiz</button></Link>
    </>
)