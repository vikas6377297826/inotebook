import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  // GET all notes
  const getNotes = async () => {
    // API call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE0MDE4MWQ0MDZiNTRjNzQyYzJhMDEzIn0sImlhdCI6MTYzMTU5ODM1MX0.e-MB2YJ2t0LsGH3O593Kl5tUTD-07RD-hI5ScUyFA14",
      },
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  };

  //Add a Note
  const addNote = async (title, description, tag) => {
    //TODO: API call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE0MDE4MWQ0MDZiNTRjNzQyYzJhMDEzIn0sImlhdCI6MTYzMTU5ODM1MX0.e-MB2YJ2t0LsGH3O593Kl5tUTD-07RD-hI5ScUyFA14",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();
    console.log(json);
    const note = {
      _id: "6142b19c82a879d123243e18b6",
      user: "6140181d406b54c742c2a013[added]",
      title: title,
      description: description,
      tag: tag,
      date: "2021-09-16T02:53:16.448Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  //Delete a Note
  const deleteNote = async (id) => {
    // API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE0MDE4MWQ0MDZiNTRjNzQyYzJhMDEzIn0sImlhdCI6MTYzMTU5ODM1MX0.e-MB2YJ2t0LsGH3O593Kl5tUTD-07RD-hI5ScUyFA14",
      },
    });
    const json = response.json();
    console.log(json);

    console.log("delete note id" + id);
    const newNote = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNote);
  };

  //Edit a Note

  const editNote = async (id, title, description, tag) => {
    // API call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE0MDE4MWQ0MDZiNTRjNzQyYzJhMDEzIn0sImlhdCI6MTYzMTU5ODM1MX0.e-MB2YJ2t0LsGH3O593Kl5tUTD-07RD-hI5ScUyFA14",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    //logic to edit notes
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
