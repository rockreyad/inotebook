import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

const AddNote = (props) => {
  const context = useContext(noteContext);

  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  const { addNote } = context;

  const { showAlert } = props;

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    showAlert("Note has been added Successfully", "Success", "teal");

    setNote({ title: "", description: "", tag: "" });
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="font-sans py-7">
        <div className="relative flex flex-col sm:justify-center items-center">
          <div className="relative sm:max-w-sm w-full">
            <div className="card bg-gray-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
            <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
              <form method="#" action="#" className="mt-10">
                <div>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    value={note.title}
                    placeholder="Enter Your Note Title"
                    className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 p-2 outline-none"
                    onChange={onChange}
                  />
                </div>

                <div className="mt-7">
                  <input
                    type="textarea"
                    name="description"
                    id="description"
                    value={note.description}
                    placeholder="Enter Your Note Description"
                    className="mt-1 block w-full  h-28 border-none bg-gray-100 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 p-2 outline-none"
                    rows={5}
                    cols={5}
                    onChange={onChange}
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="tag"
                    id="tag"
                    value={note.tag}
                    placeholder="Enter a tag"
                    className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 p-2 outline-none"
                    onChange={onChange}
                  />
                </div>
                <div className="mt-7">
                  <button
                    disabled={
                      note.title.length < 5 || note.description.length < 5
                    }
                    className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                    onClick={handleClick}
                  >
                    Add Note
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNote;
