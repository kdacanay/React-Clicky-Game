import React, { Component } from 'react';
import './index';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';
import images from './images.json'
import Card from './components/Card';


function shuffleImages(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {

  state = {
    images: images,
    gameMessage: "Click an image to begin!",
    topScore: 0,
    currentScore: 0,
    clicked: []
  };

  clickHandler = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleScore();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  handleScore = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      gameMessage: "Correct!"
    });
    if (this.state.currentScore === 15) {
      this.setState({
        gameMessage: "You win!",
        currentScore: 0,
      });
    }
    else if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    this.handleSchuffle();
  };

  handleReset = () => {

    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      gameMessage: "Incorrect! Game Over!",
      clicked: []
    });
    this.handleSchuffle();
  };

  handleSchuffle = () => {
    let imagesShuffled = shuffleImages(images);
    let selected = imagesShuffled.slice(0, 24);
    //log images to make sure only 24 of 32 are selected
    console.log(selected);
    this.setState({ images: selected });
  };

  render() {
    return (
      <div>
        <Wrapper>
          <Navbar
            currentScore={this.state.currentScore}
            topScore={this.state.topScore}
            gameMessage={this.state.gameMessage}
          />
          <Header />
          <div className='container-fluid'>
            <div className='row'>
              {this.state.images.map(image => (
                <Card
                  clickHandler={this.clickHandler}
                  handleScore={this.handleScore}
                  handleReset={this.handleReset}
                  handleSchuffle={this.handleSchuffle}
                  id={image.id}
                  key={image.id}
                  name={image.name}
                  image={image.image}
                  clicked={image.clicked}
                />
              ))}
            </div>
          </div>
        </Wrapper>
        <Footer />
      </div >
    );
  }
}

export default App;
