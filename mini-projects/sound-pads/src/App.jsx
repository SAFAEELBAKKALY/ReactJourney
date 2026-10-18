import padsData from "./pads"
import React from "react";

export default function App(props) {

    const [pads, SetPads] = React.useState(padsData);
    const buttonElem = pads.map(pad=> (<button style={{backgroundColor: (props.darkMode)? "#222222" : "#cccccc" }} key={pad.id}></button>));

    return (
        <main>
          <div className="pad-container">{buttonElem}</div>
        </main>
    )
}
