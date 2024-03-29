import './index.scss';

interface AnimatedLettersProps {
  letterClass: string;
  strArray: string[];
  idx: number;
  cIdx: number;
}

/**
 * @param letterClass - The class that we want to apply to our characters
 * @param strArray - The array of the characters
 * @param idx - The index (the starting point for setting the delay of our letters in the naimation)
 */
const AnimatedLetters = (props: AnimatedLettersProps) => {
  const { letterClass, strArray, idx, cIdx } = props;

  return (
    <span>
      {strArray.map((char, i) => (
        <span
          key={char + i}
          className={`${letterClass} _${i + idx} __${i + cIdx}`}
        >
          {char}
        </span>
      ))}
    </span>
  );
};

export default AnimatedLetters;
