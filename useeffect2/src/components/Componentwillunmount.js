import React, { useEffect, useState } from "react";

function Componentwillunmount() {
  const [sayac, setSayac] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSayac(sayac + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div>
      <h3>Sayac: {sayac}</h3>
    </div>
  );
}

export default Componentwillunmount;
