import { Question1 } from "../Questions/Question1"
import { Question2 } from "../Questions/Question2"
import { Question3 } from "../Questions/Question3"
import { Question4 } from "../Questions/Question4"
import { Question5 } from "../Questions/Question5"
import { Question6 } from "../Questions/Question6"
import { Question7 } from "../Questions/Question7"
import { Question8 } from "../Questions/Question8"
import { Question9 } from "../Questions/Question9"
import { useNavigate } from 'react-router-dom';
import React, {useState, useEffect} from "react";


export const QuizQuestionaire = () => {
    //set up all answers here
    let [answerQ1, setAnswerQ1] = useState({})
    let [answerQ2, setAnswerQ2] = useState({})
    let [answerQ3, setAnswerQ3] = useState({})
    let [answerQ4, setAnswerQ4] = useState({})
    let [answerQ5, setAnswerQ5] = useState({})
    let [answerQ6, setAnswerQ6] = useState({})
    let [answerQ7, setAnswerQ7] = useState({})
    let [answerQ8, setAnswerQ8] = useState({})
    let [answerQ9, setAnswerQ9] = useState({})

    // const navigate = useNavigate() 
    let sonicBucket = {
        name:"sonic",
        points: 0

    };
    let amyBucket= {
        name:"amy",
        points: 0
    };
    let knucklesBucket = {
        name:"knuckles",
        points: 0
    };
    let tailsBucket = {
        name:"tails",
        points: 0
    };
    let shadowBucket = {
        name:"shadow",
        points: 0
    };
    let robotnikBucket = {
        name:"robotnik",
        points: 0
    };

    const addPoints = (obj) => {
        obj.points += 1
    };

    const bucketList = [sonicBucket, amyBucket, knucklesBucket, tailsBucket, shadowBucket, robotnikBucket]

    const sumAns = (ans) => {
        if(ans === "sonic"){
            addPoints(bucketList[0])

        }else if(ans === "amy"){
            addPoints(bucketList[1])

        }else if(ans === "tails"){
           addPoints(bucketList[3])

        }else if(ans === "shadow"){
            addPoints(bucketList[4])

        }else if(ans=== "knuckles"){
            addPoints(bucketList[2])

        }else if( ans === "robotnik"){
            addPoints(bucketList[5])

        }else if( ans === "goodGuy"){
            addPoints(bucketList[0])
            addPoints(bucketList[1])
            addPoints(bucketList[2])
            addPoints(bucketList[3])
        }else if( ans === "badGuy"){
            addPoints(bucketList[5])
        }else if( ans === "antiHero"){
            addPoints(bucketList[4])
        }
    }

    const navigate = useNavigate();
    const calcResults = () => {
        sumAns(answerQ1);
        sumAns(answerQ2);
        sumAns(answerQ3);
        sumAns(answerQ4);
        sumAns(answerQ5);
        sumAns(answerQ6);
        sumAns(answerQ7);
        sumAns(answerQ8);
        sumAns(answerQ9);
        console.log(sonicBucket,amyBucket, knucklesBucket, tailsBucket, shadowBucket, robotnikBucket)

        bucketList.sort((a, b) => (a.points > b.points) ? 1 : -1)
        bucketList.reverse()
        
        console.log(bucketList[0])
        //this should use the answer to navigate to the character page
        navigate(`/${bucketList[0].name}`)
    }

    
    //set up all handleChanges here
    const handleChangeQ1 = (event) => {
        const stateToChangeQ1 = event.target.value
        setAnswerQ1(stateToChangeQ1)

        
    }
    const handleChangeQ2 = (event) => {
        const stateToChangeQ2 = event.target.value
        setAnswerQ2(stateToChangeQ2)
        
    }
    const handleChangeQ3 = (event) => {
        const stateToChangeQ3 = event.target.value
        setAnswerQ3(stateToChangeQ3)
        
    }
    const handleChangeQ4 = (event) => {
        const stateToChangeQ4 = event.target.value
        setAnswerQ4(stateToChangeQ4)
        
    }
    const handleChangeQ5 = (event) => {
        const stateToChangeQ5 = event.target.value
        setAnswerQ5(stateToChangeQ5)
        
    }
    const handleChangeQ6 = (event) => {
        const stateToChangeQ6 = event.target.value
        setAnswerQ6(stateToChangeQ6)
        
    }
    const handleChangeQ7 = (event) => {
        const stateToChangeQ7 = event.target.value
        setAnswerQ7(stateToChangeQ7)
        
    }
    const handleChangeQ8 = (event) => {
        const stateToChangeQ8 = event.target.value
        setAnswerQ8(stateToChangeQ8)
        
    }
    const handleChangeQ9 = (event) => {
        const stateToChangeQ9 = event.target.value
        setAnswerQ9(stateToChangeQ9)
        
    }

    //set effects
    useEffect(() => {
        setAnswerQ1(answerQ1);
    }, []);
     
    useEffect(() => {
        setAnswerQ2(answerQ2);
    }, []);
    useEffect(() => {
        setAnswerQ3(answerQ3);
    }, []);
    useEffect(() => {
        setAnswerQ4(answerQ4);
    }, []);
    useEffect(() => {
        setAnswerQ5(answerQ5);
    }, []);
    useEffect(() => {
        setAnswerQ6(answerQ6);
    }, []);
    useEffect(() => {
        setAnswerQ7(answerQ7);
    }, []);
    useEffect(() => {
        setAnswerQ8(answerQ8);
    }, []);
    useEffect(() => {
        setAnswerQ9(answerQ9);
    }, []);


    return (
        <>
        
            <div className="Question--1" >
                <p>Which activity would you enjoy most?</p>
                <form >
                    <input type="radio" id="run" name="fav_activity" value="sonic" onChange={handleChangeQ1} />
                    <label htmlFor="run">Running, gotta go fast!</label><br></br>

                    <input type="radio" id="punch" name="fav_activity" value="knuckles" onChange={handleChangeQ1}/>
                    <label htmlFor="punch">Punching, preferably boulders</label><br></br>

                    <input type="radio" id="robot" name="fav_activity" value="robotnik" onChange={handleChangeQ1}/>
                    <label htmlFor="robot">Building robots to carry out my evil schemes.</label><br></br>

                    <input type="radio" id="brood" name="fav_activity" value="shadow" onChange={handleChangeQ1}/>
                    <label htmlFor="brood">Brooding on the darkness within my soul.</label><br></br>

                    <input type="radio" id="puzzles" name="fav_activity" value="tails" onChange={handleChangeQ1}/>
                    <label htmlFor="puzzles">Building gadgets, and doing maitenance on my airplane</label><br></br>

                    <input type="radio" id="hang" name="fav_activity" value="amy" onChange={handleChangeQ1}/>
                    <label htmlFor="hang">Hanging out with a certain someone I like.</label>
                </form> 
            </div>
            
            <div className="Question--2" >
                <p>Which of the following colors do you like the best??</p>
                <form >
                    <input type="radio" id="run" name="fav_activity" value="sonic" onChange={handleChangeQ2} />
                    <label htmlFor="run">Blurry blue</label><br></br>

                    <input type="radio" id="punch" name="fav_activity" value="knuckles" onChange={handleChangeQ2}/>
                    <label htmlFor="punch">Emerald green</label><br></br>

                    <input type="radio" id="robot" name="fav_activity" value="robotnik" onChange={handleChangeQ2}/>
                    <label htmlFor="robot">A combination of red and yellow, it really brings out the color of my mustache</label><br></br>

                    <input type="radio" id="brood" name="fav_activity" value="shadow" onChange={handleChangeQ2}/>
                    <label htmlFor="brood">Pitch black</label><br></br>

                    <input type="radio" id="puzzles" name="fav_activity" value="tails" onChange={handleChangeQ2}/>
                    <label htmlFor="puzzles">Orange!</label><br></br>

                    <input type="radio" id="hang" name="fav_activity" value="amy" onChange={handleChangeQ2}/>
                    <label htmlFor="hang">Pink!</label>
                </form> 

            </div>
             
            <div className="Question--3" >
                <p>What are you afraid of?</p>
                <form >
                    <input type="radio" id="run" name="fav_activity" value="sonic" onChange={handleChangeQ3} />
                    <label htmlFor="run">Water! I can't swim!</label><br></br>

                    <input type="radio" id="punch" name="fav_activity" value="knuckles" onChange={handleChangeQ3}/>
                    <label htmlFor="punch">Losing track of the Master Emerald</label><br></br>

                    <input type="radio" id="robot" name="fav_activity" value="robotnik" onChange={handleChangeQ3}/>
                    <label htmlFor="robot">That I might accidentally spark the singularity wherin robot AI incerases exponentially and wipes out all organic life.</label><br></br>

                    <input type="radio" id="brood" name="fav_activity" value="shadow" onChange={handleChangeQ3}/>
                    <label htmlFor="brood">My own reality</label><br></br>

                    <input type="radio" id="puzzles" name="fav_activity" value="tails" onChange={handleChangeQ3}/>
                    <label htmlFor="puzzles">That Dr. Robotnik might accidentally spark the singularity wherin robot AI incerases exponentially and wipes out all organic life.</label><br></br>

                    <input type="radio" id="hang" name="fav_activity" value="amy" onChange={handleChangeQ3}/>
                    <label htmlFor="hang">That the person I care for doesn't return my feelings</label>
                </form> 

            </div>
             
            <div className="Question--4" >
                <p>What sounds like a fun day to you?</p>
                <form >
                    <input type="radio" id="run" name="fav_activity" value="goodGuy" onChange={handleChangeQ4} />
                    <label htmlFor="run">Hanging out with my friends on the beach</label><br></br>

                    <input type="radio" id="punch" name="fav_activity" value="badGuy" onChange={handleChangeQ4}/>
                    <label htmlFor="punch">Engaging in petty revenge, maybe even serious revenge, but mostly revenge.</label><br></br>

                    <input type="radio" id="robot" name="fav_activity" value="antiHero" onChange={handleChangeQ4}/>
                    <label htmlFor="robot">None of your business</label><br></br>

                   
                </form> 

            </div>
             
            <div className="Question--5" >
                <p>If you traveled in a vehicle what vehicle would you prefer?</p>
                <form >
                    <input type="radio" id="run" name="fav_activity" value="sonic" onChange={handleChangeQ5} />
                    <label htmlFor="run">Anything fast, so like a formula 1 car</label><br></br>

                    <input type="radio" id="punch" name="fav_activity" value="knuckles" onChange={handleChangeQ5}/>
                    <label htmlFor="punch">A jeep that can handle going off road</label><br></br>

                    <input type="radio" id="robot" name="fav_activity" value="robotnik" onChange={handleChangeQ5}/>
                    <label htmlFor="robot">I'm partial to anything egg-shaped that can hover</label><br></br>

                    <input type="radio" id="brood" name="fav_activity" value="shadow" onChange={handleChangeQ5}/>
                    <label htmlFor="brood">Whatever motorcycle happens to be near-by</label><br></br>

                    <input type="radio" id="puzzles" name="fav_activity" value="tails" onChange={handleChangeQ5}/>
                    <label htmlFor="puzzles">Bi-planes are my favorite</label><br></br>

                    <input type="radio" id="hang" name="fav_activity" value="amy" onChange={handleChangeQ5}/>
                    <label htmlFor="hang">A horse drawn carriage would be fun, and kinda romantic!</label>
                </form> 

            </div>
             
            <div className="Question--6" >
                <p>If you needed to team up with someone why would you team up with them?</p>
                <form >
                    <input type="radio" id="run" name="fav_activity" value="goodGuy" onChange={handleChangeQ6} />
                    <label htmlFor="run">Lot's of reasons, that person might need my help or maybe could become great friends, the more the merrier!</label><br></br>

                    <input type="radio" id="punch" name="fav_activity" value="badGuy" onChange={handleChangeQ6}/>
                    <label htmlFor="punch">I don't "team up" with people I use them, and when they are no longer useful I get rid of them</label><br></br>

                    <input type="radio" id="robot" name="fav_activity" value="antiHero" onChange={handleChangeQ6}/>
                    <label htmlFor="robot">I might team up with someone temporarily, if our interests aligned</label><br></br>
                </form> 

            </div>
             
            <div className="Question--7" >
                <p>Which shoes would you prefer to wear?</p>
                <form >
                    <input type="radio" id="run" name="fav_activity" value="sonic" onChange={handleChangeQ7} />
                    <label htmlFor="run">Running shoes</label><br></br>

                    <input type="radio" id="punch" name="fav_activity" value="knuckles" onChange={handleChangeQ7}/>
                    <label htmlFor="punch">Hiking boots</label><br></br>

                    <input type="radio" id="robot" name="fav_activity" value="robotnik" onChange={handleChangeQ7}/>
                    <label htmlFor="robot">Sleek black dramatic boots</label><br></br>

                    <input type="radio" id="brood" name="fav_activity" value="shadow" onChange={handleChangeQ7}/>
                    <label htmlFor="brood">hover shoes</label><br></br>

                    <input type="radio" id="puzzles" name="fav_activity" value="tails" onChange={handleChangeQ7}/>
                    <label htmlFor="puzzles">Custom sneakers</label><br></br>

                    <input type="radio" id="hang" name="fav_activity" value="amy" onChange={handleChangeQ7}/>
                    <label htmlFor="hang">Whatever complements my outfit</label>
                </form> 

            </div>
             
            <div className="Question--8" >
                <p>What I value most is...?</p>
                <form >
                    <input type="radio" id="run" name="fav_activity" value="sonic" onChange={handleChangeQ8} />
                    <label htmlFor="run">My friends</label><br></br>

                    <input type="radio" id="punch" name="fav_activity" value="knuckles" onChange={handleChangeQ8}/>
                    <label htmlFor="punch">Fulfilling my duty</label><br></br>

                    <input type="radio" id="robot" name="fav_activity" value="robotnik" onChange={handleChangeQ8}/>
                    <label htmlFor="robot">Recieving recognition and respect I deserve, even if I have to get it at gun point</label><br></br>

                    <input type="radio" id="brood" name="fav_activity" value="shadow" onChange={handleChangeQ8}/>
                    <label htmlFor="brood">Dead</label><br></br>

                    <input type="radio" id="puzzles" name="fav_activity" value="tails" onChange={handleChangeQ8}/>
                    <label htmlFor="puzzles">Knowing that my frinds are there for me and that I can be there for them too!</label><br></br>

                    <input type="radio" id="hang" name="fav_activity" value="amy" onChange={handleChangeQ8}/>
                    <label htmlFor="hang">love</label>
                </form> 

            </div>
             
            <div className="Question--9" >
                <p>Which weapon would you feel the most confindent wielding?</p>
                <form >
                    <input type="radio" id="run" name="fav_activity" value="sonic" onChange={handleChangeQ9} />
                    <label htmlFor="run">I'd want a weapon that grows out of me so that it's always ready to go, like spines or something</label><br></br>

                    <input type="radio" id="punch" name="fav_activity" value="knuckles" onChange={handleChangeQ9}/>
                    <label htmlFor="punch">The only weapons I need are my fists</label><br></br>

                    <input type="radio" id="robot" name="fav_activity" value="robotnik" onChange={handleChangeQ9}/>
                    <label htmlFor="robot">My superior intellect, mostly in the form of killer robots</label><br></br>

                    <input type="radio" id="brood" name="fav_activity" value="shadow" onChange={handleChangeQ9}/>
                    <label htmlFor="brood">Guns are useful</label><br></br>

                    <input type="radio" id="puzzles" name="fav_activity" value="tails" onChange={handleChangeQ9}/>
                    <label htmlFor="puzzles">A ray gun? maybe with a built-in translator? Or with a detachable boomerang. If I...</label><br></br>

                    <input type="radio" id="hang" name="fav_activity" value="amy" onChange={handleChangeQ9}/>
                    <label htmlFor="hang">Definitely a hammer. A big one.</label>
                </form> 

            </div>
            <button onClick={calcResults}>See Your Character</button>
        </>
    )

}

