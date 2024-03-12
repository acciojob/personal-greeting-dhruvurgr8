import React, { useState } from "react";

const Greet = () => {
  const [name, setName] = useState("");

  const greet = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <p>Enter your name:</p>
      <input onChange={greet} type="text" />
      <p>Hello {name}</p>
    </>
  );
};

export default Greet;
