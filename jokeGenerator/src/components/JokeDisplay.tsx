import "../services/JokeApi";
import type Joke from "../services/JokeApi";
import { useState } from "react";
import Button from "./Button";
import PunchlineRevealed from "./PunchlineRevealed";
interface JokeProps {
  joke: Joke;
}

function JokeDisplay({ joke }: JokeProps) {
  const [showPunchline, setShowPunchLine] = useState<boolean | null>(null);

  function revealPunchLine() {
    setShowPunchLine(true);
  }

  return (
    <>
      <p>{joke.setup}</p>
      <Button text="REVEAL PUNCHLINE" onClick={() => revealPunchLine()} />
      {showPunchline && <PunchlineRevealed punchline={joke.punchline} />}
    </>
  );
}

export default JokeDisplay;
