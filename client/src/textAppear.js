import { useState } from "react";

export default function TextAppear() {
  const [text, setText] = useState("");

  return (
    <div className="textAppear">
      <h3>Input Text and it will appear below</h3>
      <input values={text} onChange={(e) => setText(e.target.value)}></input>
      <h1>{text}</h1>
    </div>
  );
}
