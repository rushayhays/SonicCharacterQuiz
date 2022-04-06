//First Question has 6 answers one per character
//need to install a hook to grab the state and add to a results counter

import React, {useState} from "react";

//I think I neeed to add a parameter of a var that holds a number
// to be updated
export const Question1 = () => {

    let [checkedState, setCheckedState] = useState()

    const handleChange = () => {
        
    }

    return(
        <>
            <div class="question card">
                <div class="questionPrompt">
                    <p>Which Activity would you enjoy Most?</p>
                </div>
                <input type="radio" id="sonic1" name="fav_activity" value="Running"/>
                <label for="Running">Running</label><br/>

                <input type="radio" id="knuckels1" name="fav_activity" value="Boxing"/>
                <label for="Boxing">Boxing</label><br/>

                <input type="radio" id="tails1" name="fav_activity" value="Puzzle Solving"/>
                <label for="Puzzle Solving">Puzzle Solving</label><br/>

                <input type="radio" id="robotnik1" name="fav_activity" value="buildRobots"/>
                <label for="buildRobots">Building Robots to carry out my evil schemes</label><br/>

                <input type="radio" id="shadow1" name="fav_activity" value="brood"/>
                <label for="brood">Brood on the darkness within my soul</label><br/>

                <input type="radio" id="amy1" name="fav_activity" value="hangOut"/>
                <label for="hangOut">Hang out with someone I like</label>

            </div>
        
        </>
    )

}