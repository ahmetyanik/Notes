import axios from "axios";
import React, { useEffect, useState } from "react";
import background from "../images/cool-background.png";
import NotesStick from "./NoteStick";

function MainPage() {

    const [notes,setNotes]=useState([]);

   

    console.log(notes);


    function addData(e){

        var newData = document.getElementById("input").value;

        setNotes(function(oldDatas){
          return [...oldDatas,newData];
        });


        e.preventDefault();

    }

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        minHeight:"100vh",
        minWidth:"100vw",
        backgroundSize: "cover",
      }}
    >

    

      <h1 className="title text-center pt-3 pb-3">My Notes</h1>

      <div className="searchbox">
        <form className="d-flex">
          <input
            id="input"
            className="form-control me-2"
            type="search"
            placeholder="Add Notes"
            aria-label="Search"
            name="note"
          />
          <button onClick={addData} className="btn btn-outline-success" type="submit">
            Add
          </button>
        </form>
      </div>

      <div className="top-notes">
      
      <div className="notes">
        {notes.map(function(note,id){
          return(
            <div>{id+1}-{note}.</div>
          )
        })}  
      </div>

      </div>     

    </div>
  );
}

export default MainPage;
