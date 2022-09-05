import { useState } from 'react';
import './App.css';
import Classcomponent from './components/Classcomponent';
import ComponentWillUnmount from './components/ComponentWillUnmount';
import Functionalcomponent from './components/Functionalcomponent';
import Holidays from './components/Holidays';

function App() {

  const [isVisible,setIsVisible] = useState(true);



  return (
    <div className="App">
    <Classcomponent/>
    <Functionalcomponent/>

   

    {isVisible &&  <ComponentWillUnmount/>}
      <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>

      <Holidays/>
    </div>
  );
}

export default App;
