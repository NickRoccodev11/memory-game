//data, fonts
import './assets/JournalDingbats2.ttf';
import cards from './data.js';
//hooks
import { useState, useEffect } from 'react';
//components
import Card from './Card.jsx';
import Difficulty from './Difficulty.jsx';

function App() {
  const [difficulty, setDifficulty] = useState(true)
  const [deck, setDeck] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [win, setWin] = useState(false);
  const [lose, setLose] = useState(false);
  const [tries, setTries] = useState(5);

  //Fisher-Yates shuffle algorithm
  const shuffle = deck => {
    let currentIndex = deck.length;
    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [deck[currentIndex], deck[randomIndex]] = [
        deck[randomIndex], deck[currentIndex]];
    }
    setDeck(deck)
  }

  //difficulty the first game
  useEffect(() => {
    shuffle(cards);
  }, [])

  //when two cards are flipped, check for a match/miss
  useEffect(() => {
    if (flipped.length === 2) {
      if (flipped[0].color === flipped[1].color) {
        flipped.forEach(card => {
          card.solved = true;
        });
        setFlipped([]);
      } else {
        setTries(prev => prev - 1);
        setTimeout(() => setFlipped([]), 1000);
      }
    }
  }, [flipped]);

  //check for a won or lost game
  useEffect(() => {
    let unsolved = cards.filter(card => !card.solved);
    if (!unsolved.length) {
      setTimeout(() => setWin(true), 1000);
    } else if (tries === 0) {
      setTimeout(() => setLose(true), 1000);
    }
  }, [flipped]);


  return (
    <div id="app">
      <div id="board">
        {win || lose ?
          <div className='play-again'>
            <h1>YOU {win ? "WON" : "LOST"}!</h1>
            <button onClick={() => {
              cards.forEach(card => card.solved = false);
              setTries(5);
              setFlipped([]);
              shuffle(deck)
              setWin(false);
              setLose(false);
              setDifficulty(true)
              }
            }>
              play again</button>
          </div> :
          difficulty ?
            <Difficulty
              setDifficulty={setDifficulty}
              setTries={setTries}
            /> :
            <>
              {
                deck.map((card, idx) => {
                  return <Card
                    key={idx}
                    card={card}
                    flipped={flipped}
                    setFlipped={setFlipped}
                  />
                })
              }
              <h2 id='tries'>tries left: {tries}</h2>
            </>
        }
      </div>
    </div>
  )
}

export default App;
