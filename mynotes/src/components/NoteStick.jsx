import axios from "axios";
import React, { useEffect, useState } from "react";

function NotesStick(notesfromMain) {


  const[done,setDone] = useState(false);

  function doIt(){

    setDone(true);
    notesfromMain.click();
  }


  return (
    <div onClick={doIt}>
      <div  className="d-flex align-items-center justify-content-between px-3">
        <div >
          <span id={notesfromMain.id}>
            {notesfromMain.id + 1}-{notesfromMain.note}
          </span>
        </div>
        <i  id={notesfromMain.id} className="fas fa-trash icons"></i>
      </div>
    </div>
  );
}

export default NotesStick;
