import axios from "axios";
import React, { useEffect, useState } from "react";

function NotesStick(notesfromMain) {

    const [notes,setNotes]=useState([]);

    function getNotes(){

        axios.get("http://localhost:3000/api/notes.json").then(function(datas){
            setNotes(datas.data);
        });
    }


 

    useEffect(getNotes,[])


  return (
    <div className="notesStick">
      <div className="notesStick-note">
        {notesfromMain.id}-{notesfromMain.not} <button onClick>Sil</button>
      </div>
    </div>
  );
}

export default NotesStick;
