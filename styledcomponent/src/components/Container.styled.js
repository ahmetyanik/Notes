import { Button } from "@mui/material";
import styled from "styled-components";

export const ContainerStyled = styled.div`
  background-color: red;
  height: 50vh;

  .deneme {
    background-color: gray;
  }

  .text{
    color:green;
  }
`;

export const StyledButton = styled.button`
  background-color: green;
  color: white;
  padding: 15px;
`;

export const MuiliButton = styled(Button)`
  background-color: white;
  
  color: blue;
`;
