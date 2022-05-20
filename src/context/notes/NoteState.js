import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const authToken = localStorage.getItem("token");
  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);

  //Get all notes
  const fetchNotes = async () => {
    //TODO: api call

    const response = await fetch(`${host}/api/notes/fetch_all_notes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": authToken,
      },
    });

    const json = await response.json();

    setNotes(json);
  };
  //Add a Note
  const addNote = async (title, description, tag) => {
    //TODO: api call

    const response = await fetch(`${host}/api/notes/add_note`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": authToken,
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const note = await response.json();
    setNotes(notes.concat(note));
  };

  //Edit a Note
  const editNote = async (id, title, description, tag) => {
    //TODO: api call

    const response = await fetch(`${host}/api/notes/update_note/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": authToken,
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    console.log(json);
    let newNotes = JSON.parse(JSON.stringify(notes));

    //TODO:Logic to Edit
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
        break;
      }
    }

    setNotes(newNotes);
  };

  //Delete a Note
  const deleteNote = async (id) => {
    //TODO: api call
    const response = await fetch(`${host}/api/notes/delete_note/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": authToken,
      },
    });
    console.log("Deleting note" + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, fetchNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
