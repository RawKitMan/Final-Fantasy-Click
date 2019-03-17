//React component for the image cards the user will click on.

import React from "react";
import './style.css';

function Cards(props) {

    //If the image has the correct property = true, set it up with correctClick() and removeCard() methods
    if (props.correct) {
        
        //If we aren't to a point where the user is one point away
        //from winning, then we place a normal clicky card
        if (props.currentScore < 4) {
            return (

                <img className="img-thumbnail image-size" alt={props.alt} src={props.url} onClick={() => { props.correctClick(); props.removeCard(props.id); }}></img>

            )
        };

        //If the user is one point away from winning, the last
        //correct card, when clicked, will reset the images 
        //so the user can play again
        return(
            <img className="img-thumbnail image-size" alt={props.alt} src={props.url} onClick={() => { props.correctClick(); props.removeCard(props.id); props.restart(); }}></img>
        )
    };

    //Otherwise, set the card up with the incorrectClick() and restart() methods
    return (

        <img className="img-thumbnail image-size" alt={props.alt} src={props.url} onClick={() => { props.incorrectClick(); props.restart() }}></img>
    )
};


//Export the component to the Wrapper component
export default Cards;