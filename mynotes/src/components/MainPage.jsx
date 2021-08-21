import axios from "axios";
import React, { useEffect, useState } from "react";
import background from "../images/cool-background.png";
import NotesStick from "./NoteStick";

function MainPage() {
  const [notes, setNotes] = useState([]);

  console.log(notes);

  function addData(e) {
    var newData = document.getElementById("input").value;
    var alertElement = document.getElementById("alert");

    if (newData.length > 0) {
      alertElement.style.display = "none";
      setNotes(function (oldDatas) {
        return [...oldDatas, newData];
      });
    } else {
      alertElement.style.display = "block";
    }

    document.getElementById("input").value = "";

    e.preventDefault();
  }

  function deleteData(e) {
    var element = e.target["id"];
    var deletingElement = document.getElementById(element);

    var ahmet = notes.shift();

    setNotes(function (öncekiveriler) {
      return [ahmet];
    });

    console.log(notes);
  }

  function fromNoteStick(){

      console.log("Hello");

  }

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        minWidth: "100vw",
        backgroundSize: "cover",
      }}
    >
      <h1 className="title text-center pt-3 pb-3">My Notes</h1>

      <div className="searchbox flex-column align-items-center">
        <div>
          <div className="d-flex">
            <input
              id="input"
              className="form-control me-2"
              type="search"
              placeholder="Add Notes"
              aria-label="Search"
              name="note"
            />
            <button
              onClick={addData}
              className="btn btn-outline-success"
              type="submit"
            >
              Add
            </button>
          </div>
          <div className="title pt-1 px-2">
            {notes.length > 0 ? <div className="titel">Total Notes:{notes.length}</div> : ""}
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center">
        <div
          id="alert"
          className="alert alert-warning mt-2"
          role="alert"
          style={{ display: "none" }}
        >
          <strong>:)</strong> You should write something!
        </div>
      </div>
      <div className="top-notes">
        <div className="notes">
          {notes.map(function (note, id) {
            return <NotesStick click={fromNoteStick} key={id} note={note} id={id} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default MainPage;
