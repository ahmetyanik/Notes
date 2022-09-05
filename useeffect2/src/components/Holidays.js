import React, { useEffect, useState } from "react";

function Holidays() {
  const [year, setYear] = useState("2022");
  const [country, setCountry] = useState("tr");
  const [holidays, setHolidays] = useState([]);

  const getYear = (e) => {
    e.preventDefault();

    const inputYear = document.querySelector("#year").value;
    setYear(inputYear);
  };

  const getCountry = (e) => {
    e.preventDefault();

    const inputCountry = document.querySelector("#country").value;
    setCountry(inputCountry);
  };

  useEffect(() => {
    fetch(`https://date.nager.at/api/v2/publicholidays/${year}/${country}`)
      .then((data) => data.json())
      .then((data) => setHolidays(data));
  }, [year, country]);

  console.log(holidays);

  return (
    <div style={{ background: "blue", color: "white" }}>
      <form onSubmit={getYear}>
        <input id="year" placeholder="Year" />
      </form>

      <form onSubmit={getCountry}>
        <input id="country" placeholder="Country" />
      </form>

      {holidays.map((holiday) => {
        return (
          <div>
            {holiday.localName} - {holiday.date}
          </div>
        );
      })}
    </div>
  );
}

export default Holidays;
