import { useState } from "react";
import Classcomponents from "./components/Classcomponents";
import Componentwillunmount from "./components/Componentwillunmount";
import Functional from "./components/Functional";
import Holidays from "./components/Holidays";

function App() {

  const [isVisible,setIsVisible] = useState(true);

  return (
    <div className="App">
      <Classcomponents />
      <Functional />

    {
      isVisible && <Componentwillunmount/>
    }

    <button onClick={()=>setIsVisible(!isVisible)} >Toggle</button>

    <Holidays/>
      
    </div>
  );
}

export default App;
