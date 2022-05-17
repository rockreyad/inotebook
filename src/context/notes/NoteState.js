import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      id: 1,
      title: "My Title",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis nam culpa tenetur accusamus iste obcaecati, commodi dolores. Ullam eaque sunt optio inventore temporibus illo.",
    },
    {
      id: 2,
      title: "My Title 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis provident sint beatae, quod repellat nisi adipisci quis error accusantium ipsum.",
    },
    {
      id: 3,
      title: "My Title 3",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe beatae illo molestias. Ipsum eveniet similique quia. Eum, .",
    },
    { id: 4, title: "My Title 4", description: "Hello 4th Description" },
    {
      id: 5,
      title: "My Title 5",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate autem, doloremque officiis amet odit quis?",
    },
    {
      id: 6,
      title: "My Title 6",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque voluptatem blanditiis, commodi facere a maxime? Suscipit ipsa quo reiciendis?",
    },
    {
      id: 7,
      title: "My Title 7",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci excepturi accusantium aliquid natus porro expedita sunt sequi? Soluta delectus id quisquam.",
    },
  ];

  const [notes, setNotes] = useState(notesInitial);
  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
