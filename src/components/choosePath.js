import React, {useEffect, useState, useRef} from "react";
import crossroad from './img/crossroad.jpg';
import cuteLizard from './img/pokey_lizard.jpg'
import bugs from './img/bugs.jpg'
import fight from './img/fight.jpg'
import river from './img/river.jpg'
import bite from './img/bite.jpg'
import explosion from './img/explosion.jpg'
import cornfield from './img/cornfield.jpg'
import angry_dragon from './img/angry_dragon.jpg'
import award from './img/award.jpg'
import bug_dinner from './img/bug_dinner.jpg'
import bus_stop from './img/bus stop.jpg'
import dap from './img/dap.png'
import distraught from './img/distraught.jpg'
import dragon from './img/dragon.jpg'
import dry_cleaner from './img/dry cleaner.jpg'
import eaten from './img/eaten.jpg'
import exhausted from './img/exhausted.jpg'
import laugh from './img/laugh.png'
import mouth from './img/mouth.jpg'
import pet from './img/pet.jpg'
import pokey_lizard from './img/pokey_lizard.jpg'
import puddle_of_mud from './img/puddle_of_mud.png'
import surgery from './img/surgeory.jpg'
import tv from './img/tv.jpg'
import washing_machine from './img/washing_machine.jpg'
import pro_dragon from './img/pro-dragon.jpg'
import anti_dragon from './img/anti-dragon.jpg'
import fatman from './img/fatman.jpg'
import mom from './img/mom.jpg'
import ash from './img/ash.jpg'
import give from './img/return.jpg'



const decisionTree = {
    root: {
        text: "Which path do you choose?",
        image : crossroad,
        option1: {
            text: "Go Left",
            nextLevel: "outcome16" //done
        },
        option2: {
            
            text: "Go Right",
            nextLevel: "outcome1", //done
        }
    },
    outcome1: {
        text: "You find a cute pokey lizard!",
        image : cuteLizard,
        option1: {
            text: "Touch it",
            nextLevel: "outcome9",
        },
        option2: {
            text: "Put in in your pocket and carry on",
            nextLevel: "outcome2"
        }
    },

    outcome16: {
        text: "You encounter a horde of giant alien bugs.",
        image : bugs,
        option1: {
            text: "Run",
            nextLevel: "outcome17"
        },
        option2: {
            text: "Fight them",
            nextLevel: "outcome24"
        }
    },
    outcome24: {
        text: "You hold of the bugs for a while but you begin to be overwhelmed.",
        image : fight,
        option1: {
            text: "Call in an air strike on your position",
            nextLevel: "outcome28"
        },
        option2: {
            text: "Tell the bugs it was just a prank",
            nextLevel: "outcome25"
        }
    },
    outcome17: {
        text: "With the bugs trailing close behind you encounter a raging river.",
        image : river,
        option1: {
            text: "Swim Across",
            nextLevel: "outcome21"
        },
        option2: {
            text: "Tell a joke to the bugs",
            nextLevel: "outcome18"
        }
    },
    outcome9: {
        text: "The lizard bites you and doesn't let go.",
        image : bite,
        option1: {
            text: "Pour ketchup on it",
            nextLevel: "outcome13"
        },
        option2: {
            text: "Read it a bedtime story",
            nextLevel: "outcome10"
        }
    },
    outcome2: {
        text: "A cave explodes in front of you.",
        image : explosion,
        option1: {
            text: "Don't stick around to find out what happens",
            nextLevel: "outcome6"
        },
        option2: {
            text: "Watch to see what happens",
            nextLevel: "outcome3"
        }
    },
    outcome28: {
        text: "The air strike blasts you into the air and you land in a distant cornfield.",
        image : cornfield,
        option1: {
            text: "Walk home",
            nextLevel: "outcome30"
        },
        option2: {
            text: "Ask to use the farmer's bathroom",
            nextLevel: "outcome29"
        }
    },
    outcome25: {
        text: "They laugh it off and you dap each other up, they invite you over for dinner.",
        image : dap,
        option1: {
            text: "Eat with them",
            nextLevel: "outcome27"
        },
        option2: {
            text: "Make an excuse",
            nextLevel: "outcome26"
        }
    },
    outcome21: {
        text: "You get swept away quickly, you wake up disorientated in a puddle of mud.",
        image : puddle_of_mud,
        option1: {
            text: "Get your clothes dry-cleaned",
            nextLevel: "outcome23"
        },
        option2: {
            text: "Wash your clothes on high heat",
            nextLevel: "outcome22"
        }
    },
    outcome18: {
        text: "The bugs do not understand and look around puzzled.",
        image : laugh,
        option1: {
            text: "Put a cocomelon video on and make a break for it",
            nextLevel: "outcome20"
        },
        option2: {
            text: "Steal some material and tell an Amy Schumer joke",
            nextLevel: "outcome19"
        }
    },
    outcome13: {
        text: "The lizard unhinges its jaws and now your whole hand is in its mouth.",
        image : mouth,
        option1: {
            text: "Leave it be",
            nextLevel: "outcome15"
        },
        option2: {
            text: "See a doctor",
            nextLevel: "outcome14"
        }
    },
    outcome10: {
        text: "It falls asleep and a dragon appears and thanks you profusely for helping put its son to bed.",
        image : dragon,
        option1: {
            text: "Ask to ride the dragon",
            nextLevel: "outcome12"
        },
        option2: {
            text: "Offer to help anytime",
            nextLevel: "outcome11"
        }
    },
    outcome6: {
        text: "You find a bus stop.",
        image : bus_stop,
        option1: {
            text: "Wait for the bus",
            nextLevel: "outcome8"
        },
        option2: {
            text: "Use the payphone to call your mom",
            nextLevel: "outcome7"
        }
    },
    outcome3: {
        text: "An angry dragon exits the cave spewing flames.",
        image : angry_dragon,
        option1: {
            text: "Brandish your sword and fight",
            nextLevel: "outcome5"
        },
        option2: {
            text: "Beg for forgiveness",
            nextLevel: "outcome4"
        }
    },
    outcome30: {
        text: "On your arrival home, you are recognized as a war hero for fighting against the alien bugs.",
        image : award,
        
        ending: {
            type: "good",
            text: "You reached a good ending! Refresh the page to try again!"
        }

    },
    outcome29: {
        text: "His bathroom is out of toilet paper and you have to awkwardly yell for more.",
        image : distraught,
        ending: {
            type: "bad",
            text: "You reached a bad ending... Refresh the page to try again!"
        }
    },
    outcome27: {
        text: "You have delicious bug cuisine and make friends you will never forget.",
        image : bug_dinner,
        ending: {
           type: "good" ,
           text: "You reached a good ending! Refresh the page to try again!"
        }
        
    },
    outcome26: {
        text: "You eat cold leftovers at home and watch tv by your lonesome.",
        image : tv,
        ending: {
           type: "bad" ,
           text: "You reached a bad ending... Refresh the page to try again!"
        }
        
    },
    outcome23: {
        text: "Your suit comes back clean but you are down 40$.",
        image : dry_cleaner,
        ending: {
           type: "neutral" ,
           text: "This is a neutral ending. Refresh the page to try again!"
        }
        
    },
    outcome22: {
        text: "Your suit is ruined.",
        image : washing_machine,
        ending: {
           type: "bad" ,
           text: "You reached a bad ending... Refresh the page to try again!"
        }
        
    },
    outcome20: {
        text: "You lose your phone but escape with your life.",
        image : exhausted,
        ending: {
           type: "neutral" ,
           text: "This is a neutral ending. Refresh the page to try again!"
        }
        
    },
    outcome19: {
        text: "The bugs devour you immediately.",
        image : eaten,
        ending: {
           type: "bad" ,
           text: "You reached a bad ending... Refresh the page to try again!"
        }
        
    },
    outcome15: {
        text: "Eventually the lizard lets go, you become the best of friends.",
        image : pet,
        ending: {
           type: "win" ,
           text: "This is the best ending! You win!"
        }
    },
    outcome14: {
        text: "The doctors operate and the lizard doesn't make it.",
        image : surgery,
        ending: {
           type: "bad" ,
           text: "You reached a bad ending... Refresh the page to try again!"
        }
        
    },
    outcome12: {
        text: "You get cancelled on twitter for being insensitive to dragon culture.",
        image : anti_dragon,
        ending: {
           type: "bad" ,
           text: "You reached a bad ending... Refresh the page to try again!"
        }
        
    },
    outcome11: {
        text: "You get cancelled on twitter for being pro-dragon",
        image : pro_dragon,
        ending: {
           type: "bad" ,
           text: "You reached a bad ending... Refresh the page to try again!"
        }
        
    },
    outcome8: {
        text: "You save a seat for your lizard on the bus, but heavyset man sits on it and becomes angry with you.",
        image : fatman,
        ending: {
           type: "neutral" ,
           text: "This is a neutral ending. Refresh the page to try again!"
        }
        
    },
    outcome7: {
        text: "You get a ride home with your mom, your mom yells at you for bringing a lizard home.",
        image : mom,
        ending: {
           type: "neutral" ,
           text: "This is a neutral ending. Refresh the page to try again!"
        }
        
    },
    outcome5: {
        text: "You are instantly incinerated by the dragon's breath",
        image : ash,
        ending: {
           type: "bad" ,
           text: "You reached a bad ending... Refresh the page to try again!"
        }
        
    },
    outcome4: {
        text: "The dragon demands you return its son(the lizard), you do.",
        image : give,
        ending: {
           type: "good" ,
           text: "You reached a good ending! Refresh the page to try again!"
        }
        
    },
    
    
}


export default function ChoosePath()
{
    // let option1 = "Go Right";
    // let option2 = "Go Left";
    // let outcome = "Which path do you choose?";
    // let displayedImage = crossroad

    
    // const [currentLevel, setCurrentLevel] = useState("root");
    // const [outcome, setOutcome] = useState("");
    const [currentNode, setCurrentNode] = useState(decisionTree.root);

    
    function chooseOption(option) {
        // currentNode = decisionTree[option.nextLevel]
        setCurrentNode(decisionTree[option.nextLevel]);
        console.log(currentNode);
    
        
    }


    
    return(
        <>
            <div className="chooseAdventure">
            <h1 className = "question">{currentNode.text}</h1>
            
                {currentNode.ending ? (
                    <div className={currentNode.ending.type}>
                        <p>{currentNode.ending.text}</p>
                    </div>
                ) : (
                    <div className = "options">
                        <p className="option" onClick = {() =>chooseOption(currentNode.option1)}>
                            {currentNode.option1.text}
                        </p>
                        <p className="option" onClick = {() =>chooseOption(currentNode.option2)}>
                            {currentNode.option2.text}
                        </p>
                    </div>
                )}
                
            
            <img className="choiceImage" src={currentNode.image} alt =""></img>
            </div>
            
        </>
        
    )
}