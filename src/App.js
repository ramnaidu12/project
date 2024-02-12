
import './App.css';

import Nav from './shared/navbar';
import { Outlet } from 'react-router-dom';


function App() {
  return (
    <div className="App">
     
    
     <Nav></Nav>
<Outlet></Outlet>
    </div>
  );
}

export default App;
