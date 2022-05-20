import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const NoteItem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;
  return (
    <div>
      <div className="bg-PaleGoldenrod w-60 h-72 mr-8 mt-8 mb-8 static rounded-lg ">
        <div className="bg-white w-60 h-72 -m-2 hover:m-0 absolute rounded-lg shadow-lg hover:shadow-2xl hover:bg-PaleGoldenrod transition-all duration-150 ease-out hover:ease-in">
          <div className="flex m-4 justify-between items-center">
            <h1 className=" text-2xl font-bold">{note.title}</h1>
            <div className="space-x-3">
              <i
                className="fa-solid fa-file-pen cursor-pointer hover:text-teal-400"
                onClick={() => {
                  updateNote(note);
                }}
              ></i>
              <i
                className="fa-solid fa-delete-left cursor-pointer hover:text-teal-400"
                onClick={() => {
                  deleteNote(note._id);
                  props.showAlert(
                    "Note has been Deleted Successfully",
                    "Success",
                    "teal"
                  );
                }}
              ></i>
            </div>
          </div>

          <hr className="m-4 rounded-2xl border-t-2" />
          <p className="m-4 text-sm">{note.description}</p>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
