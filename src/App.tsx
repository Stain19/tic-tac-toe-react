import { useState } from "react";
import Grid from "./components/Grid";
import "./styles/App.css";
import ResetButton from "./components/ResetButton";

export default function App() {
  const [status, setStatus] = useState("");
  return (
    <main>
      <section>
        <p> ULTIMATE TIC TAC TOE</p>
        <p>{status}</p>
      </section>
      <ResetButton winner={status !== ""} />
      <Grid setStatus={setStatus}></Grid>
    </main>
  );
}
