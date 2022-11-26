import { useState } from 'react';
import HangmanDrawing from './components/HangmanDrawing';
import HangmanWord from './components/HangmanWord';
import Keyboard from './components/Keyboard';
import words from './wordList.json';

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessedLetters, setGuessedLetters] = useState<String[]>([]);
  return (
    <div
      style={{
        maxWidth: '800px',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        margin: '0 auto',
        alignItems: 'center',
        marginBottom: '5rem',
      }}
    >
      <div
        className="status"
        style={{
          fontSize: '2rem',
          textAlign: 'center',
        }}
      >
        Lose or Win
      </div>

      <HangmanDrawing />
      <HangmanWord />
      <div
        style={{
          alignSelf: 'stretch',
        }}
      >
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
