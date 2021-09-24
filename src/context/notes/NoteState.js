import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "61418ac97d342e4ecff74116",
      user: "6140181d406b54c742c2a013",
      title: "vikas notes",
      description: "Hello every one",
      tag: "udaipur",
      date: "2021-09-15T05:55:21.764Z",
      __v: 0,
    },
    {
      _id: "61418aca7d342e4ecff74118",
      user: "6140181d406b54c742c2a013",
      title: "vikas notes",
      description: "Hello every one",
      tag: "udaipur",
      date: "2021-09-15T05:55:22.609Z",
      __v: 0,
    },
    {
      _id: "61418acd7d342e4ecff7411a",
      user: "6140181d406b54c742c2a013",
      title: "vikas notes",
      description: "Hello every one",
      tag: "udaipur",
      date: "2021-09-15T05:55:25.256Z",
      __v: 0,
    },
    {
      _id: "6142b19c82a879d1eb3e18b6",
      user: "6140181d406b54c742c2a013",
      title: "new vikas notes",
      description: "good morning",
      tag: "udaipur",
      date: "2021-09-16T02:53:16.448Z",
      __v: 0,
    },
    {
      _id: "6142b19c82a879d1eb3e18b6",
      user: "6140181d406b54c742c2a013",
      title: "new vikas notes",
      description: "good morning",
      tag: "udaipur",
      date: "2021-09-16T02:53:16.448Z",
      __v: 0,
    },
    {
      _id: "6142b19c82a879d1eb3e18b6",
      user: "6140181d406b54c742c2a013",
      title: "new vikas notes",
      description: "good morning",
      tag: "udaipur",
      date: "2021-09-16T02:53:16.448Z",
      __v: 0,
    },
    {
      _id: "6142b19c82a879d1eb3e18b6",
      user: "6140181d406b54c742c2a013",
      title: "new vikas notes",
      description: "good morning",
      tag: "udaipur",
      date: "2021-09-16T02:53:16.448Z",
      __v: 0,
    },
    {
      _id: "6142b19c82a879d1eb3e18b6",
      user: "6140181d406b54c742c2a123013",
      title: "new vikas notes",
      description: "good morning",
      tag: "udaipur",
      date: "2021-09-16T02:53:16.448Z",
      __v: 0,
    },
    {
      _id: "6142b19c82a879d1eb3e3218b6",
      user: "6140181d406b54c742c2a013",
      title: "new vikas notes",
      description: "good morning",
      tag: "udaipur",
      date: "2021-09-16T02:53:16.448Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial);

  //Add a Note
  const addNote = (title, description, tag) => {
    //TODO: API call
    const note = {
      _id: "6142b19c82a879d123243e18b6",
      user: "6140181d406b54c742c2a013[added]",
      title: "new vikas notes",
      description: "good morning",
      tag: "udaipur",
      date: "2021-09-16T02:53:16.448Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  //Delete a Note
  const deleteNote = () => {};

  //Edit a Note

  const editNote = () => {};

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
