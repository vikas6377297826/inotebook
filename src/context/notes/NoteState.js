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
    const note = await response.json();
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
    const json = await response.json();
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
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE0MDE4MWQ0MDZiNTRjNzQyYzJhMDEzIn0sImlhdCI6MTYzMTU5ODM1MX0.e-MB2YJ2t0LsGH3O593Kl5tUTD-07RD-hI5ScUyFA14",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    let newNote = JSON.parse(JSON.stringify(notes));
    //logic to edit notes
    for (let index = 0; index < newNote.length; index++) {
      const element = newNote[index];
      if (element._id === id) {
        newNote[index].title = title;
        newNote[index].description = description;
        newNote[index].tag = tag;
        break;
      }
    }
    setNotes(newNote);
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
