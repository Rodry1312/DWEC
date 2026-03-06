import { useState } from "react";

interface punchLineProps {
  punchline: string;
}

function PunchlineRevealed({ punchline }: punchLineProps) {
  const [num] = useState(() => Math.floor(Math.random() * 5) + 1);
  console.log(num);

  return (
    <>
      <p>{punchline}</p>
      <img src={`./img/lol${num}.gif`} alt="LOL GIF" />
    </>
  );
}

export default PunchlineRevealed;
