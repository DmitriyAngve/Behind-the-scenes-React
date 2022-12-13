import React, { useState, useCallback } from "react";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";

import "./App.css";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log("App running!"); // se this whenever we clicked a button and yet

  // This function triggee then the button is clicked
  const toggleParagraphHandler = useCallback(() => {
    // Use allow toggle state snapshot in function HERE to check whether I'm allowed to set show paragraph
    if (allowToggle) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowToggle]); // pass function as a first argument of useCallback (basically use useCallback to store it)
  // With useCallback hook function, passed with argument - this function should not be recreated with every execution

  //------------------EXPLANATION OF IFCHECK---------------------
  // "if (allowToggle) {" - "allowToggle" react stored for my function is still the old allow toggle value from the first time the app component was executed, not the most recent one, because JavaScript stored "allowToggle" this constant when it created that function here
  //----------------------------------------------------------

  //--------------------USE DEPENDENCY------------------------
  // Whenever allow toggle changes and it has a new value, we want to recreate that function and store that new recreated function - this ensures that we always use the latest "allowToggle" value inside of that stored function. If "allowToggle" does not change however, than we don't recreate the function
  //----------------------------------------------------------

  const allowToggleHandler = () => {
    setAllowToggle(true);
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
      <DemoOutput show={showParagraph} />
      {/* <DemoOutput show={showParagraph} /> */}
      {/* {showParagraph && <p>This is new!</p>} */}
      <Button onClick={allowToggleHandler}>Allow Toggling!</Button>
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
