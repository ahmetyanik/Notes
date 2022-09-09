import "./App.css";
import {
  ContainerStyled,
  MuiliButton,
  StyledButton,
} from "./components/Container.styled";
import Button from "@mui/material/Button";

const tikla = () => {
  console.log("Merhaba");
};

function App() {
  return (
    <div className="App">
      <ContainerStyled>
        <Button variant="contained" color="success">
          Contained
        </Button>
        <MuiliButton className="deneme text" variant="contained">
          Tikla
        </MuiliButton>
      </ContainerStyled>
      <StyledButton onClick={tikla}>DENEME</StyledButton>
    </div>
  );
}

export default App;
