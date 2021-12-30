import React from 'react';
import Card from "./components/Card";
import ScoreBoard from "./components/ScoreBoard";
import './App.css';


let flips = 0;
let opened = [];
const cardImg = [{ img: require('./images/flower1.jpg') },
{ img: require('./images/flower2.jpg') },
{ img: require('./images/flower3.jpg') },
{ img: require('./images/flower4.jpg') },
{ img: require('./images/flower5.jpg') },
{ img: require('./images/flower6.jpg') },
{ img: require('./images/flower1.jpg') },
{ img: require('./images/flower2.jpg') },
{ img: require('./images/flower3.jpg') },
{ img: require('./images/flower4.jpg') },
{ img: require('./images/flower5.jpg') },
{ img: require('./images/flower6.jpg') },]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moves: 5,
      backImg: require('./images/backSide.jpg'),
      score: 0,
      cardsOpened: 0,
      shuffled: false,
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
    this.shuffleArray(cardImg);
    this.setState({ shuffled: true });

  }



  Flip = (e) => {
    if (this.state.moves > 0 && this.state.cardsOpened < 3 && this.state.score < 6 && !e.target.src.includes(e.target.dataset.flower)) {

      e.target.src = e.target.dataset.flower;
      flips++;

      if (flips % 2 === 0) {

        this.setState({ cardsOpened: this.state.cardsOpened + 4 })
      }

      opened.push(e.target);


      if (opened.length === 2 && opened[0].src === opened[1].src) {
        this.setState({ score: this.state.score + 1 });
        this.setState({ cardsOpened: 0 });
        opened.splice(0, 2);

      } else if (opened.length === 2 && opened[0] !== opened[1]) {
        this.setState({ moves: this.state.moves - 1 });
        setTimeout(() => {
          opened[0].src = this.state.backImg;
          opened[1].src = this.state.backImg;
          this.setState({ cardsOpened: 0 });
          opened.splice(0, 2);
        }, 1000);

      }

    }


  }

  restartGame = () => {
    window.location.reload(false);
  }



  render() {

    return (<div className='main'>
      <ScoreBoard moves={this.state.moves} score={this.state.score} restart={this.restartGame} />
      <div className='container'>
        {cardImg.map((flower, index) => { return (<Card key={index} flip={this.Flip} backImg={this.state.backImg} flower={flower.img} />) })}
      </div>
    </div >
    )
  }

}
export default App;

