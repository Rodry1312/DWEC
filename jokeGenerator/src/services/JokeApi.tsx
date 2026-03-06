export default interface Joke {
  type: string;
  setup: string;
  punchline: string;
  id: number;
}

export async function generateJoke(): Promise<Joke> {
  const response = await fetch(
    "https://official-joke-api.appspot.com/random_joke"
  );
  const joke: Joke = await response.json();
  console.log(joke);
  return joke;
}
