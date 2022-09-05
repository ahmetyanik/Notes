import React, { useEffect, useState } from "react";

function Holidays() {
  const [year, setYear] = useState("2022");
  const [country, setCountry] = useState("tr");
  const [holidays,setHolidays] = useState([]);

  const getYear = (e) => {
    e.preventDefault();

    const input1 = document.querySelector("#input1").value;

    setYear(input1);
  };
  const getCountry = (e) => {
    e.preventDefault();

    const input2 = document.querySelector("#input2").value;

    setCountry(input2);
  };

  console.log(year, country);

  useEffect(()=>{
    fetch(`https://date.nager.at/api/v2/publicholidays/${year}/${country}`).then(data=>data.json()).then(data=>setHolidays(data));
  },[year,country])

  console.log(holidays);

  return (
    <div style={{ background: "green" }}>
      <form onSubmit={getYear}>
        <input id="input1" placeholder="Year" />
      </form>
      <form onSubmit={getCountry}>
        <input id="input2" placeholder="Country" />
      </form>

      {
       holidays.map(holiday=>{
        return(
            <div>{holiday.localName} - {holiday.date}</div>
        )
       })
      }
    </div>
  );
}

export default Holidays;
