import React from 'react';
import Card from "./components/Card";
import ScoreBoard from "./components/ScoreBoard";
import './App.css';


let flips = 0;
let opened = [];



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moves: 5,
      backImg: require('./images/backSide.jpg'),
      score: 0,
      cardsOpened: 0,
      shuffled: false,
      cardImg: [{ img: require('./images/flower1.jpg'), index: 0 },
      { img: require('./images/flower2.jpg'), index: 0 },
      { img: require('./images/flower3.jpg'), index: 0 },
      { img: require('./images/flower4.jpg'), index: 0 },
      { img: require('./images/flower5.jpg'), index: 0 },
      { img: require('./images/flower6.jpg'), index: 0 },
      { img: require('./images/flower1.jpg'), index: 0 },
      { img: require('./images/flower2.jpg'), index: 0 },
      { img: require('./images/flower3.jpg'), index: 0 },
      { img: require('./images/flower4.jpg'), index: 0 },
      { img: require('./images/flower5.jpg'), index: 0 },
      { img: require('./images/flower6.jpg'), index: 0 },],

    }

    this.shuffleArray = this.shuffleArray.bind(this);
  };


  shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {

      // Generate random number
      var j = Math.floor(Math.random() * (i + 1));

      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    return array;
  }

  componentDidMount() {
    this.shuffleArray(this.state.cardImg);
    this.setState({ shuffled: true });
  }



  Flip = (e) => {
    if (this.state.moves > 0 && this.state.cardsOpened < 3 && this.state.score < 6 && e.target.style.zIndex === '0') {

      let cardImg = [...this.state.cardImg];

      cardImg[parseInt(e.target.dataset.id)].index = -1;

      this.setState({ cardImg: cardImg })

      flips++;

      if (flips % 2 === 0) {
        this.setState({ cardsOpened: this.state.cardsOpened + 4 })
      }

      opened.push(e.target.previousElementSibling);

      if (opened.length === 2 && opened[0].src === opened[1].src) {

        this.setState({ score: this.state.score + 1 });
        this.setState({ cardsOpened: 0 });
        opened.splice(0, 2);

      } else if (opened.length === 2 && opened[0].src !== opened[1].src) {

        this.setState({ moves: this.state.moves - 1 });
        setTimeout(() => {
          let firstId = opened[0].nextElementSibling.dataset.id;
          let secondId = opened[1].nextElementSibling.dataset.id;
          cardImg[parseInt(firstId)].index = 0;
          cardImg[parseInt(secondId)].index = 0;
          this.setState({ cardImg: cardImg, cardsOpened: 0 });
          opened.splice(0, 2);
        }, 1000);

      }

    }


  }

  restartGame = () => {
    let cardImg = [{ img: require('./images/flower1.jpg'), index: 0 },
    { img: require('./images/flower2.jpg'), index: 0 },
    { img: require('./images/flower3.jpg'), index: 0 },
    { img: require('./images/flower4.jpg'), index: 0 },
    { img: require('./images/flower5.jpg'), index: 0 },
    { img: require('./images/flower6.jpg'), index: 0 },
    { img: require('./images/flower1.jpg'), index: 0 },
    { img: require('./images/flower2.jpg'), index: 0 },
    { img: require('./images/flower3.jpg'), index: 0 },
    { img: require('./images/flower4.jpg'), index: 0 },
    { img: require('./images/flower5.jpg'), index: 0 },
    { img: require('./images/flower6.jpg'), index: 0 },];
    this.shuffleArray(cardImg);
    this.setState({ moves: 5, score: 0, cardsOpened: 0, cardImg });
    flips = 0;
    opened = [];

  }



  render() {

    return (<div className='main'>
      <ScoreBoard moves={this.state.moves} score={this.state.score} restart={this.restartGame} />
      <div className='container'>
        {this.state.cardImg.map((flower, index) => { return (<Card key={index} flip={this.Flip} backImg={this.state.backImg} flower={flower.img} id={index} index={flower.index} />) })}
      </div>
    </div >
    )
  }

}
export default App;

