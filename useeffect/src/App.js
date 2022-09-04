import { useState } from 'react';
import './App.css';
import Classcomponent from './components/Classcomponent';
import ComponentWillUnmount from './components/ComponentWillUnmount';
import Functionalcomponent from './components/Functionalcomponent';

function App() {

  const [isVisible,setIsVisible] = useState(true);



  return (
    <div className="App">
    <Classcomponent/>
    <Functionalcomponent/>

   

    {isVisible &&  <ComponentWillUnmount/>}
      <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>
    </div>
  );
}

export default App;
