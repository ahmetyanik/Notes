import React from "react";
import { StyledButton } from "./index.styles";



function Buttons() {
  return (
      <>
    <StyledButton color="green" backgroundColor="white">
      Buton
    </StyledButton>
    <StyledButton color="white" backgroundColor="black" className="deneme">
      Buton
    </StyledButton>
    </>
  );
}

export default Buttons;
