import React, { useState } from "react";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";

import "./App.css";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log("App running!"); // se this whenever we clicked a button and yet

  // This function triggee then the button is clicked
  const toggleParagraphHandler = () => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  };

  // ~ Child Component re-evaluation ~
  // STEP: 2
  // 2.1 In App Component add <DemoOutput />
  // 2.2 Set the show prop cuz I use that show prop in DemoOutput "show={showParagraph}"
  // 2.3 {showParagraph} - beacuse that is a boolean, it is false initialy and it's changed to true if we click the button and then back to false ends on
  // ~ Child Component re-evaluation ~

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={false} />
      {/* <DemoOutput show={showParagraph} /> */}
      {/* {showParagraph && <p>This is new!</p>} */}
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;

//{showParagraph && <p>This is new!</p>} - element conditionally. Initially not shown - useState!

// props.show === props.previous.show - that React.memo does
// it works like a simple JS function
// because "hi" === "hi" -> true, false === false -> true
// show={false} is a boolean
// [1,2,3] === [1,2,3] false
// functions is just objects
