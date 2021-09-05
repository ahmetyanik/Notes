import MainPage from './components/MainPage';
import React, { useState } from "react";

function App() {
  const [notes, setNotes] = useState([]);

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
  }

  function deleteData(e) {
    var element = e.target["id"];

    
    console.log(element);
    const temp = [...notes];
    temp.splice(element, 1);

    setNotes(temp)
  }


  return (
    <div className="App">

    <MainPage addData={addData} deleteData={deleteData} notes={notes} />

    </div>
  );
}

export default App;
