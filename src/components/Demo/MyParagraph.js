import React from "react";

const MyParagraph = (props) => {
  console.log("MyParagraph RUNNING"); // I'll see this every time than button is clicked
  return <p>{props.children}</p>;
};

export default MyParagraph;
