import './CSS/App.css';
import Home from './Components/Home';
import {BrowserRouter as Router, Route, Routes, Link, NavLink} from 'react-router-dom';
import Dynamics from './Components/Dynamics';
import Kinematics from './Components/Kinematics';
import WorkEnergy from './Components/WorkEnergy';
import RotationalMotion from './Components/RotationalMotion';
import ImpulseMomentum from './Components/ImpulseMomentum';
import Calculators from './Components/Calculators';
function App() {

  const navLinkStlyes = ({ isActive }) => {
    return {
      background: isActive? 'darkblue' : 'none',
      color: isActive? 'white' : 'black',
    }
  }
  return (
  <Router>

    
    <div className="App">
    
    <div className='linkGrid'>
      <div className='linkContainer'>
          <NavLink style={navLinkStlyes} to = '/physics-project/' className='Link'>
          Home
          </NavLink>

          <NavLink style={navLinkStlyes} to='/Dynamics' className='Link'>
          Dynamics
          </NavLink>

          <NavLink style={navLinkStlyes} to = '/Kinematics' className='Link'>
          Kinematics
          </NavLink>

          <NavLink style={navLinkStlyes} to = '/WorkEnergy' className='Link'>
          Work Energy
          </NavLink>

          <NavLink style={navLinkStlyes} to = '/ImpulseMomentum' className='Link'>
            Impulse Momentum
          </NavLink>

          <NavLink style={navLinkStlyes} to = '/RotationalMotion' className='Link'>
          Rotational Motion
          </NavLink>

          <NavLink style={navLinkStlyes} to = '/Calculators' className='Link'>
            Calculators
          </NavLink>

      </div>
    </div>
      

    
    

    <Routes>
      <Route exact path='/physics-project/' element ={<Home/>}/>
      <Route exact path = '/Dynamics' element={<Dynamics/>}/>
      <Route exact path = '/Kinematics' element = {<Kinematics/>}/>
      <Route exact path = '/WorkEnergy' element = {<WorkEnergy/>}/>
      <Route exact path = '/RotationalMotion' element = {<RotationalMotion/>}/>
      <Route exact path = '/ImpulseMomentum' element = {<ImpulseMomentum/>}/>
      <Route exact path = '/Calculators' element = {<Calculators/>}/>
    </Routes>

    </div>
  </Router>
  );
}

export default App;
