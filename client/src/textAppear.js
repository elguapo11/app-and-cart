import { useState } from "react";

export default function TextAppear() {
  const [text, setText] = useState("");

  return (
    <div className="textAppear">
      <h3>Input Text and it will appear right below this line</h3>
      <input values={text} onChange={(x) => setText(x.target.value)}></input>
      <h1>{text}</h1>
    </div>

  );
}
// note how 'x' is just an argument that we are passing into the function
// the most important thing is sthat onChange is actually the event

// 'target' returns the element where the event occurred, and in this case 
// it would be 'x'. In essence, we are saying. Put anything you want in and it will be reflected outward
// and we are assigning it to 'setText'. 