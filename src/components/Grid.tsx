import { useEffect, useRef, useState } from "react";
import Cell from "./Cell";
import "./styles/Grid.css";

// ---------------------------------------
const POSSIBLE_WINNER_VALUES: number[][] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], //Horizontais
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], //Verticais
  [0, 4, 8],
  [2, 4, 6], //Diagonais
];

// ---------------------------------------

export default function Grid({
  setStatus,
}: {
  setStatus: (value: string) => void;
}) {
  const [isXTurns, setIsXTurns] = useState(false);
  const [values, setValues] = useState(Array(9).fill(null));

  const onCellClick = (i: number) => {
    if (defineWinner(values) || values[i]) {
      return false;
    }
    const newValues = values.slice();
    if (isXTurns) {
      newValues[i] = "x";
      setValues(newValues);
    } else {
      newValues[i] = "o";
      setValues(newValues);
    }
    setIsXTurns(!isXTurns);
    return true;
  };

  useEffect(() => {
    const winner = defineWinner(values);
    if (winner) {
      setStatus("Winner: " + winner);
    } else {
      setStatus("Next player: " + (isXTurns ? "X" : "O"));
    }
  }, [values, setStatus, isXTurns]);

  return (
    <div className="grid">
      <Cell value={values[0]} onClick={() => onCellClick(0)}></Cell>
      <Cell value={values[1]} onClick={() => onCellClick(1)}></Cell>
      <Cell value={values[2]} onClick={() => onCellClick(2)}></Cell>
      <Cell value={values[3]} onClick={() => onCellClick(3)}></Cell>
      <Cell value={values[4]} onClick={() => onCellClick(4)}></Cell>
      <Cell value={values[5]} onClick={() => onCellClick(5)}></Cell>
      <Cell value={values[6]} onClick={() => onCellClick(6)}></Cell>
      <Cell value={values[7]} onClick={() => onCellClick(7)}></Cell>
      <Cell value={values[8]} onClick={() => onCellClick(8)}></Cell>
    </div>
  );
}

const defineWinner = (values: string[]) => {
  for (let i = 0; i < POSSIBLE_WINNER_VALUES.length; i++) {
    const [a, b, c] = POSSIBLE_WINNER_VALUES[i];
    if (values[a] && values[a] === values[b] && values[a] === values[c]) {
      return values[a];
    }
  }
  return null;
};
