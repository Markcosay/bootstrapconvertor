
import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';

function App() {
  
  const [style,setStyle]=useState({color:'black',background:'#f2f2f2'})

  const [curMode,setcurMode] = useState('Dark')

  const modeswitch=()=>{
      if(style.color==='black')
      {
          setStyle({color:'white',background:'#191a29'})
          setcurMode("Dark")
      }
      else{
          setStyle({color:'black',background:'#f2f2f2'})
          setcurMode("Light")
      }
  }
  

  return (
    <div className="App" style={style} >
      <Navbar> </Navbar>
      <div>
            <div>
                <div className=" form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={modeswitch}/>
                Turn on {curMode} Mode
              </div>
            </div>
      </div>
      <Main style={style} changeStyle={style}> </Main>
    </div>
  );
}

export default App;
