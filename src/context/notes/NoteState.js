import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      title: "My Title",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis nam culpa tenetur accusamus iste obcaecati, commodi dolores. Ullam eaque sunt optio inventore temporibus illo.",
    },
    {
      title: "My Title 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis provident sint beatae, quod repellat nisi adipisci quis error accusantium ipsum.",
    },
    {
      title: "My Title 3",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe beatae illo molestias. Ipsum eveniet similique quia. Eum, eos nihil. Doloremque nobis dolore dolor, illum autem quidem similique nemo. Quaerat, dignissimos.",
    },
    {
      title: "My Title 4",
      description: "Hello 4th Description",
    },
    {
      title: "My Title 5",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate autem, doloremque officiis amet odit quis?",
    },
    {
      title: "My Title 6",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque voluptatem blanditiis, commodi facere a maxime? Suscipit ipsa quo reiciendis?",
    },
    {
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
