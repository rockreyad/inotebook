import React, {
  useCallback,
  useContext,
  useEffect,
  useState,
  useRef,
} from "react";
import noteContext from "../context/notes/noteContext";
import AddNote from "./AddNote";
import Modal from "./Modal";
import NoteItem from "./NoteItem";
const Notes = () => {
  const context = useContext(noteContext);
  const { notes, fetchNotes } = context;
  const [modalOn, setModalOn] = useState(false);
  const [choice, setChoice] = useState(false);
  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  //For Modals
  const handleUpdateClick = () => {
    console.log("updating Note", note);
    setChoice(true);
    setModalOn(false);
  };
  const handleCancelClick = () => {
    setChoice(false);
    setModalOn(false);
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  const handleClick = () => {};
  const clicked = () => {
    setModalOn(true);
  };
  const ref = useRef(null);
  const updateNote = (currentNote) => {
    ref.current.click();
    setNote(currentNote);
  };
  useEffect(() => {
    fetchNotes();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1 className="text-semibold text-2xl">Add a Note</h1>
      <AddNote />
      <div>
        <div className="flex justify-center">
          <button
            class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out hidden"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            onClick={clicked}
            ref={ref}
          >
            Bite Me
          </button>
        </div>

        {/* conditionally display the result of the action if user confirms  */}
        {choice && (
          <div className="flex justify-center">
            <div className="flex  justify-center w-1/3 bg-green-400 m-4 p-6 text-lg text-white ">
              Note has been Updated !!!
            </div>
          </div>
        )}

        {modalOn && (
          <div class="modal fade fixed top-0 left-0  w-full h-full outline-none overflow-x-hidden overflow-y-auto backdrop-blur-sm flex justify-center">
            <div class="modal-dialog relative w-2/5 pointer-events-none">
              <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                  <h5
                    class="text-xl font-medium leading-normal text-gray-800"
                    id="exampleModalLabel"
                  >
                    Edit Note
                  </h5>
                  <button
                    type="button"
                    class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body relative p-4">
                  <form method="#" action="#" className="mt-10">
                    <div>
                      <input
                        type="text"
                        name="title"
                        id="title"
                        value={note.title}
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
                        className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 p-2 outline-none"
                        onChange={onChange}
                      />
                    </div>
                  </form>
                </div>
                <div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                  <button
                    type="button"
                    class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                    data-bs-dismiss="modal"
                    onClick={handleCancelClick}
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
                    onClick={handleUpdateClick}
                  >
                    UPDATE
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <h1 className="text-black font-bold text-2xl">Your Notes</h1>
      <div className="flex flex-wrap">
        {notes.map((note) => {
          return (
            <NoteItem key={note._id} note={note} updateNote={updateNote} />
          );
        })}
      </div>
    </div>
  );
};

export default Notes;
