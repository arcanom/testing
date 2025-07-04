import React, { useState } from "react";

const Hello = () => {
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  const helloName = () => {
    setSubmittedName(name.trim());
  };

  return (
    <>
      <p>Salut {submittedName || ""}</p>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={helloName}>Envoyer</button>
    </>
  );
};

export default Hello;
