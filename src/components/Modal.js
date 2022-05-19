import { useState } from "react";

const Modal = ({ title, actionButtonName, setModalOn, setChoice, note }) => {
  const [copyNote, setNote] = useState({
    title: "",
    description: "",
    tag: "",
  });
 
  return (
    <div>

    </div>
  );
};

export default Modal;
