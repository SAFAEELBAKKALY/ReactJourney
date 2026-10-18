import Pad from "./Pad.jsx"
import padsData from "./pads"
import React from "react"


export default function App() {

  const [pads, SetPads] = React.useState(padsData);
  
  function toggle(id) {
    SetPads(prevPads => prevPads.map(pad => pad.id === id ? { ...pad, on: !pad.on } : pad));
  }
  const buttonElem = pads.map(pad=> (<Pad color={pad.color} id={pad.id} key={pad.id} on={pad.on} clicked={toggle} />));

  return (
    <main>
      <div className="pad-container">{buttonElem}</div>
    </main>
  )
}
