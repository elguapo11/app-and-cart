import { useState } from "react"

export default function TextAppear() {

   const [text , setText] = useState('')


    return (
        
        <div className="textAppear">
            
            <input value={text} onChange={e => setText(e.target.value)}></input>
            <h2>Your text will appear : {text}</h2>
        </div>
    )

   
}