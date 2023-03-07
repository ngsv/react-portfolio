import { jsx as _jsx } from "react/jsx-runtime";
import "./index.scss";
/**
 * @param letterClass - The class that we want to apply to our characters
 * @param strArray - The array of the characters
 * @param idx - The index (the starting point for setting the delay of our letters in the naimation)
 */
const AnimatedLetters = (props) => {
    const { letterClass, strArray, idx } = props;
    return (_jsx("span", { children: strArray.map((char, i) => (_jsx("span", { className: `${letterClass} _${i + idx}`, children: char }, char + i))) }));
};
export default AnimatedLetters;
