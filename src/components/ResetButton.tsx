import "./styles/ResetButton.css";

export default function ResetButton({ winner }: { winner: boolean }) {
  return <>{winner && <button className="reset-button"></button>}</>;
}
