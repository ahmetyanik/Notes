import React from "react";

function NotesStick(notesfromMain) {
  return (
    <div>
      <div className="d-flex align-items-center justify-content-between px-3">
        <div>
          <span className="note" id={notesfromMain.id}>
            {notesfromMain.id + 1}-{notesfromMain.note}
          </span>
        </div>
        <i
          onClick={notesfromMain.delete}
          id={notesfromMain.id}
          className="fas fa-trash icons note"
        ></i>
      </div>
    </div>
  );
}

export default NotesStick;
