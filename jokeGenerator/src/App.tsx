import Header from "./components/Header";
import "./App.css";
import Button from "./components/Button";
import { useState } from "react";
import type Joke from "./services/JokeApi";
import { generateJoke } from "./services/JokeApi";
import JokeDisplay from "./components/JokeDisplay";
function App() {
  const [joke, setJoke] = useState<Joke | null>(null);
  async function createJoke() {
    setJoke(null);
    const joke = await generateJoke();
    setJoke(joke);
  }

  return (
    <div className="app">
      <Header />
      <Button text={"GET JOKE"} onClick={() => createJoke()} />
      {joke && <JokeDisplay joke={joke} />}
    </div>
  );
}

export default App;
