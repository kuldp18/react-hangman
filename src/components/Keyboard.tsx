import styles from '../Keyboard.module.css';
type KeyboardProps = {
  activeLetters: string[];
  inactiveLetters: string[];
  disabled?: boolean;
  addGuessedLetter: (letter: string) => void;
};

const KEYS = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

const Keyboard = ({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
  disabled = false,
}: KeyboardProps) => {
  return (
    <div
      className="container"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(75px,1fr))',
        gap: '.5rem',
      }}
    >
      {KEYS.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);
        return (
          <button
            onClick={() => addGuessedLetter(key)}
            className={`${styles.btn}
            ${isActive ? styles.active : ''}
            ${isInactive ? styles.inactive : ''} 
            `}
            key={key}
            disabled={isInactive || isActive || disabled}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;
