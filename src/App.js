import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import './style.css';

function App() {
  const [cards, setCards] = useState([]);
  const [consoleText, setConsoleText] = useState('');
  const [ruleText, setRuleText] = useState('');
  const [players, setPlayers] = useState(['Henry', 'Sam', 'Daniel']);

  const rules = {
    Ace: 'In Your face',
    King: 'Vessel',
    Queen: 'Question Master',
    Jack: 'Waterfall',
    Ten: 'Boat Came Into The Harbor',
    Nine: 'Bust a Rhyme',
    Eight: 'Mates',
    Seven: 'Rule Card',
    Six: 'Dicks',
    Five: 'Voldemort',
    Four: 'Quarantine',
    Three: 'Nominate Three',
    Two: 'Snake Eyes?'
  };

  useEffect(() => {
    generateDeck();
    //generatePlayers();
    // eslint-disable-next-line
  }, []);

  const generateDeck = function() {
    let deck = [];
    setConsoleText('New Game');
    setRuleText('New Game');
    for (const rule in rules) {
      console.log(rule);
      deck.push({ card: `${rule} of Hearts`, rule: rules[rule] });
      deck.push({ card: `${rule} of Diamonds`, rule: rules[rule] });
      deck.push({ card: `${rule} of Clubs`, rule: rules[rule] });
      deck.push({ card: `${rule} of Spades`, rule: rules[rule] });
    }
    setCards(shuffle(deck));
  };

  const draw = function() {
    const drawn = cards.shift();
    const player = players.shift();
    players.push(player);
    setConsoleText(`${player} drew the ${drawn.card}`);
    setRuleText(drawn.rule);
  };

  const shuffle = function(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  };

  return (
    <>
      <div className='center'>
        <p>Cards left {cards.length}</p>
        {cards.length ? (
          <Button onClick={draw}>Draw</Button>
        ) : (
          <Button onClick={generateDeck}>New Game</Button>
        )}
        <div>{consoleText}</div>
        <h3>{ruleText}</h3>
      </div>
    </>
  );
}

export default App;
