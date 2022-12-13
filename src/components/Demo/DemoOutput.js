import React from "react";
import MyParagraph from "./MyParagraph";

const DemoOutput = (props) => {
  console.log("Demo Output RUNNING"); // I'll see this every time than button is clicked
  return <MyParagraph>{props.show ? "This is new!" : ""}</MyParagraph>;
};

export default React.memo(DemoOutput);

// ~ Child Component re-evaluation ~
// STEP: 1
// 1.1 "return <p>{props.show ? "This is new!" : ""}</p>" - paragraph element is always rendered just a text changes based on a shown prop
// 1.2 In App Component add <DemoOutput /> --->>
// ~ Child Component re-evaluation ~
