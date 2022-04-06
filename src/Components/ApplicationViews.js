import { TailsCard } from "./youAreProfiles/TailsProfile"
import { SonicCard } from "./youAreProfiles/SonicProfile"
import { AmyCard } from "./youAreProfiles/AmyProfile"
import { ShadowCard } from "./youAreProfiles/ShadowProfile"
import { RobotnikCard } from "./youAreProfiles/RobotnikProfile"
import { KnucklesCard } from "./youAreProfiles/KnucklesProfile"
import React from "react"
import { Route, Routes } from "react-router-dom"
import { SonicQuizHome } from "./SonicQuizHome"
import { QuizQuestionaire } from "./Quiz/QuizQuestionanaire"







export const ApplicationViews = () => {
    return (
        <>
            <Routes>
                {/* Render the location list when http://localhost:3001/ */}
                <Route exact path="/" element={<SonicQuizHome />} />

                 {/* Render the animal list when http://localhost:3001/quiz */}
                 <Route path="/quiz" element={<QuizQuestionaire />} />

                {/* Render the animal list when http://localhost:3001/amy */}
                <Route path="/amy" element={<AmyCard />} />

                {/* Render the customer list when http://localhost:3001/knuckles */}
                <Route path="/knuckles" element={<KnucklesCard />} />

                {/* Render the employee list when http://localhost:3001/sonic */}
                <Route path="/sonic" element={<SonicCard />} />

                {/* Render the location list when http://localhost:3001/tails */}
                <Route path="/tails" element={<TailsCard />} />

                {/* Render the location list when http://localhost:3001/robotnik */}
                <Route path="/robotnik" element={<RobotnikCard />} />

                {/* Render the location list when http://localhost:3001/shadow */}
                <Route path="/shadow" element={<ShadowCard />} />
            </Routes>
        </>
    )
}



    