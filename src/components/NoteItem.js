import React from "react";

const NoteItem = (props) => {
  const { note } = props;
  return (
    <div>
      <div className="bg-teal-300 w-52 h-72 mr-8 mt-8 mb-8 static rounded-lg ">
        <div className="bg-white w-52 h-72 -m-2 hover:m-0 absolute rounded-lg shadow-lg hover:shadow-2xl transition-all duration-150 ease-out hover:ease-in ">
          <h1 className="m-4 text-2xl font-bold">{note.title}</h1>
          <hr className="m-4 rounded-2xl border-t-2" />
          <p className="m-4 text-sm">{note.description}</p>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
