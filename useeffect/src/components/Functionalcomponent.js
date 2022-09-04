import React, { useEffect, useState } from "react";

function Functionalcomponent() {
  const [state, setState] = useState(0);

  useEffect(() => {
    const etkilenmeyenEleman = document.querySelector("#etkilenmeyen2");
    etkilenmeyenEleman.innerText =  state;
  }, []);

  useEffect(() => {
    const etkilenenEleman = document.querySelector("#etkilenen2");
    etkilenenEleman.innerText = "etkilendim " + state;
  }, [state]);

  return (
    <div style={{ background: "blue", color: "white" }}>
      <h3>State:{state}</h3>
      <h3>
        Etkilenmeyen Eleman:<span id="etkilenmeyen2"></span>
      </h3>
      <h3>
        Etkilenen Eleman:<span id="etkilenen2"></span>
      </h3>
      <button
        onClick={() => {
          setState(state + 1);
        }}
      >
        Click
      </button>
    </div>
  );
}

export default Functionalcomponent;
