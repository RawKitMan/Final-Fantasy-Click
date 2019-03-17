//Component to contain all of the content we will be using for this application, including the navbar and image cards.

//Import React, our Cards component, and the images JSON the cards will be utilizing.
import React, { Component } from "react";
import Cards from "../Cards";
import images from "../../images.json";
import "./style.css";


class Clicky extends Component {

  //Our states for the app for score tracking, answer status (correct or incorrect) and the images being rendered
  state = {
    currentScore: 0,
    topScore: 0,
    answer: "Click an image to begin!",
    images
  };

  //This method shuffles the images around whether the new page loads or if an image is clicked.
  shuffleImages(arr) {
    let i = arr.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  };

  //If the correct image is clicked, increase the score by one and let the user know.
  correctClick = () => {
    this.setState({ currentScore: this.state.currentScore + 1 });
    if (this.state.currentScore === 4) {
      this.setState({answer: "You win! Go again!!"});
      this.setState({topScore: 5})
      this.setState({currentScore: 0})
    }
    else {
      this.setState({ answer: "Correct!" });
    }
  }

  //When a correct image is clicked, we want to remove it from the page so it's not clicked on again
  removeCard = id => {

    const imagesFilter = this.state.images.filter(image => image.id !== id);
    this.setState({ images: imagesFilter });
  };

  //If the "incorrect" image is clicked, the current score is reset to 0, the top score is updated (if the current score is higher)
  incorrectClick = () => {
    if (this.state.currentScore > this.state.topScore) {
      this.setState({ topScore: this.state.currentScore });
    }
    this.setState({ answer: "Incorrect. Try again!" })
    this.setState({ currentScore: 0 });
  }

  //When an incorrect image is clicked, reset the images
  restart = () => {
    this.setState({ images })
  }

  //Show everything on the page, passing in all of the images and the above methods as props for the Card component
  render() {
    return (
      <div>
        <nav className="navbar text-white text-center border-bottom border-dark wide-border fixed-top" style={{backgroundColor: "#6969f3"}}>
          <div className="container-fluid">
            <div className="row w-100">
              <div className="col-md-3 text-sizing">Click That Image!!</div>
              <div className="col-md-4 text-sizing">{this.state.answer}</div>
              <div className="col-md-5 text-sizing">Score: {this.state.currentScore} | Top Score: {this.state.topScore}</div>
            </div>
          </div>
        </nav>

        <div className="container spacing">
          <h1 className="display-4 text-center border-bottom border-dark p-3"><ul>Click on all of the Final Fantasy Characters</ul></h1>

          <div className="d-flex flex-wrap">
            {this.shuffleImages(this.state.images).map(image =>
              <Cards
                correct={image.correct}
                restart={this.restart}
                removeCard={this.removeCard}
                currentScore = {this.state.currentScore}
                correctClick={this.correctClick}
                incorrectClick={this.incorrectClick}
                id={image.id}
                key={image.id}
                url={image.url}
                alt={image.alt}
              />
            )}
          </div>
        </div>
      </div>
    )
  }
};

//Export this component to the App component
export default Clicky;