//First Question has 6 answers one per character
//need to install a hook to grab the state and add to a results counter

import React, {useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';


export const Question5 = () => {
    let [answer, setAnswer] = useState("")
    
    const handleChange = (event) => {
        const stateToChange = event.target.value
        setAnswer(stateToChange)
        
    }


    useEffect(() => {
        setAnswer(answer);
      }, []);

    

    return (
        <> 
            <div className="Question--1" >
                <p>Which activity would you enjoy most?</p>
                <form >
                    <input type="radio" id="run" name="fav_activity" value="sonic" onChange={handleChange} />
                    <label htmlFor="run">run</label><br></br>

                    <input type="radio" id="punch" name="fav_activity" value="knuckles" onChange={handleChange}/>
                    <label htmlFor="punch">punch</label><br></br>

                    <input type="radio" id="robot" name="fav_activity" value="robotnik" onChange={handleChange}/>
                    <label htmlFor="robot">robot</label><br></br>

                    <input type="radio" id="brood" name="fav_activity" value="shadow" onChange={handleChange}/>
                    <label htmlFor="brood">brood</label><br></br>

                    <input type="radio" id="puzzles" name="fav_activity" value="tails" onChange={handleChange}/>
                    <label htmlFor="puzzles">puzzles</label><br></br>

                    <input type="radio" id="hang" name="fav_activity" value="amy" onChange={handleChange}/>
                    <label htmlFor="hang">hang</label>
                </form> 
            </div>
            
        </>
    )

}