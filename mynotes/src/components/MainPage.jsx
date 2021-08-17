import axios from "axios";
import React, { useEffect, useState } from "react";
import background from "../images/cool-background.png";
import NotesStick from "./NoteStick";

function MainPage() {

    const [notes,setNotes]=useState({

        id:"",
        note:""

    });

    function getNotes(){

        axios.get("http://localhost:3000/api/notes.json").then(function(datas){
            setNotes(datas.data);
        });
    }

    console.log(notes);


    function ekle(e){

        var input = document.getElementById("input").value;

        setNotes()

    }


    function addNote(e){

        var input = document.getElementById("input").value;
        var comingDatas = input;

        setNotes(function(previousDatas){

            console.log(previousDatas);
            
            return{
                ...previousDatas,
                [e.target.note]:comingDatas,
                [e.target.id]:notes.length+1
            }
        })

        console.log(notes);

        e.preventDefault();
    }

    useEffect(getNotes,[]);





  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        height: "100vh",
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
          <button onClick={addNote} className="btn btn-outline-success" type="submit">
            Add
          </button>
        </form>
      </div>

   

     

    </div>
  );
}

export default MainPage;
