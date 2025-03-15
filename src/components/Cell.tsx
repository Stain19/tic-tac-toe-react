import { useState } from "react";
import "./styles/Cell.scss";

export type PossibleCellValues = "x" | "o" | null;

export default function Cell({
  value,
  onClick,
}: {
  value: PossibleCellValues;
  onClick: () => boolean;
}) {
  const [clicked, setClicked] = useState(false);
  const handleOnClick = () => {
    onClick();
    setClicked(true);
  };

  return (
    <button className="cell" onClick={handleOnClick}>
      {value === "o" && clicked ? (
        <span className="circle-trail clicked" />
      ) : value === "x" && clicked ? (
        <span className="x-trail clicked" />
      ) : null}
    </button>
  );
}
