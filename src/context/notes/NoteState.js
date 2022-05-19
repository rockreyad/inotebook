import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const authToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI3ZWQ3MzViMTA3NGZjN2RmZjViM2VjIiwiZW1haWwiOiJyZXlhZGhhc2FuQGdtYWlsLmNvbSJ9LCJpYXQiOjE2NTI0Nzk3OTd9.03FcBuFA-BTqWI7w8jq_AAdgW0ObqRgre1MWLqTSOv8";
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
    console.log(json);

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
    console.log("Adding a new Note");
    const note = {
      id: "",
      title: title,
      description: description,
    };
    setNotes(notes.concat(note));
  };

  //Edit a Note
  const editNote = async (id, title, description, tag) => {
    //TODO: api call

    const response = await fetch(`${host}/api/notes/update_note/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": authToken,
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();
    //TODO:Logic to Edit
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element.id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
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
