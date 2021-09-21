import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const s1 = {
    name: "vikas",
    class: "BSC 2nd year",
  };
  const [state, setState] = useState(s1);

  const update = () => {
    setTimeout(() => {
      setState({ name: "dangi", class: "3rd year" });
    }, 1000);
  };
  return (
    <NoteContext.Provider value={{ state, update }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
