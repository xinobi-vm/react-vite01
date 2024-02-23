import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [iat, setIat] = useState(null);
  const [exp, setExp] = useState(null);
  const [guid, setGuid] = useState(null);

  function setIatExp() {
    let x = new Date();
    x = Math.floor(x.valueOf() / 1000);
    setIat(x);
    setExp(x + 3600);
  }

  function getGuid() {
    setGuid(uuidv4());
  }

  return (
    <div className="container">
      <h1>Get JWT Timestamp</h1>

      <button onClick={setIatExp}>Get IAT and EXP</button>
      <br />
      {iat && <h4>IAT: {iat}</h4>}
      {exp && <h4>EXP: {exp}</h4>}

      <button onClick={getGuid}>Get GUID</button>
      {guid && <h4>GUID: {guid}</h4>}
    </div>
  );
}

export default App;
