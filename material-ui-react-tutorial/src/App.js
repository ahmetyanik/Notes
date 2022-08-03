import logo from "./logo.svg";
import "./App.css";
import { ButtonGroup } from "@mui/material";
import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { green , orange} from '@mui/material/colors';


const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
    marginBottom: "30",
  },
});

function ButtonStyled() {
  const classes = useStyles();

  return <Button className={classes.root}>Test Styled Button</Button>;
}

function CheckboxExample() {
  const [checked, setChecked] = useState(true);

  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          icon={<DeleteIcon />}
          checkedIcon={<SaveIcon />}
          onChange={(e) => setChecked(e.target.checked)}
          color="secondary"
          inputProps={{
            "aria-label": "secondary checkbox",
          }}
        />
      }
      label="Testing Checkbox"
    />
  );
}

const theme = createTheme({
  palette: {
    primary:{
      main:green[500],
    } ,
    secondary:{
      main:orange[500],
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <ButtonStyled />
          <TextField
            variant="outlined"
            color="secondary"
            type="email"
            label="The Time"
            value="testing@test.com"
          />
          <CheckboxExample />
          <ButtonGroup variant="contained">
            <Button startIcon={<SaveIcon />} size="large" color="primary">
              Save
            </Button>
            <Button
              startIcon={<DeleteIcon />}
              size="large"
              variant="contained"
              color="secondary"
            >
              Discard
            </Button>
          </ButtonGroup>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
