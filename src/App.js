import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    randomWords: this.generateWords(),
    currentLetters: [],
    guesses: 0,
    matchedCardIndices: [],

  }

  // Produit une représentation textuelle de l’état de la partie,
  // chaque lettre non découverte étant représentée par un _underscore_.
  // (CSS assurera de l’espacement entre les lettres pour mieux
  // visualiser le tout).
  computeDisplay(phrase, usedLetters) {
    console.log(phrase, usedLetters)
    return phrase.replace(/\w/g,
      (letter) => (usedLetters.includes(letter) ? letter : '_')
    )
  }

  generateWords() {

    const randomWord = require('random-words')
    return randomWord()

  }

  render() {
    return (
      <div className="App">
        {this.computeDisplay(this.state.randomWords,"l")}
        <br></br>
        <br></br>
        <textarea rows={1} cols={1}/>
      </div>
    );
  }
}

export default App;
