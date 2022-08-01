import React from "react";
import { StyledHeader } from "./styles/Header.styled";

function Header() {
  return (
    /* 1. Styledcomponentin en önemli özelliklerinden
    biri asagidaki gibi props gödermesidir.
    
    bg='red'   --->props'tur
    
    */
    <StyledHeader >
      <h1>Hubble</h1>
    </StyledHeader>
  );
}

export default Header;
