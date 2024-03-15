import { useState } from "react";

export const EditModal = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => setModal(!modal);
  return <div className="edit-modal">EditModal</div>;
};
