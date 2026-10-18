import Pad from "./Pad.jsx"
import padsData from "./pads"
import React from "react"


export default function App() {

  /**
 * Challenge part 2:
 * 1. Create a separate component called "Pad" and
 *    replace the `button` above with our <Pad /> component
 * 2. Pass the Pad component a prop called `color` with the
 *    value of the same name from the `padsData` objects
 * 3. In the Pad component, apply an inline style to the <button>
 *    to set the backgroundColor of the button.
 * 
 * (We'll deal with the "on" property soon)
 */
  const [pads, SetPads] = React.useState(padsData);
  const buttonElem = pads.map(pad=> (<Pad color={pad.color} key={pad.id} on={pad.on} />));

  return (
    <main>
      <div className="pad-container">{buttonElem}</div>
    </main>
  )
}
