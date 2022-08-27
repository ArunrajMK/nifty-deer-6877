
import { useState } from 'react';
import './App.css';
import MainRoutes from './components/MainRoutes';

function App() {

  const [time, setTime] = useState({ms:0,s:0, m:0, h:0})
  const [time2, setTime2] = useState({ ms2:0,s2:0, m2:5, h2:0})
  const [interv, setInterv] = useState()
  const [interv2, setInterv2] = useState()
  const [status,setStatus] = useState(0);
  const [status2,setStatus2] = useState(0);
  
  const start = ()=>{
    run2()
    run()
    setStatus(1)
    setStatus2(1)
    setInterv(setInterval(run,10))
    setInterv2(setInterval(run2,10))
  }
  let updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h
  let updatedMs2 = time2.ms2, updatedS2 = time2.s2, updatedM2 = time2.m2, updatedH2 = time2.h2
const run = ()=>{
  if(updatedM===60){
    updatedH++;
    updatedM = 0;
  }
  if(updatedS===60){
    updatedM++;
    updatedS = 0;
  }
  if(updatedMs===100){
    updatedS++;
    updatedMs = 0;
  }
  updatedMs++;
  return setTime({ms:updatedMs, s:updatedS,m:updatedM,h:updatedH})
}
//--------------------------------------------------------------------------------------------//


const run2 = ()=>{
  if(updatedM2===0){
    updatedH2--;
    updatedM2 = 60;
  }
  if(updatedS2===0){
    updatedM2--;
    updatedS2 = 60;
  }
  if(updatedMs2===0){
    updatedS2--;
    updatedMs2 = 100;
  }
  updatedMs2--;
  return setTime2({ms2:updatedMs2, s2:updatedS2,m2:updatedM2,h2:updatedH2})
}








const stop = ()=>{
  clearInterval(interv);
  clearInterval(interv2);
  setStatus(2)
  setStatus2(2)
}
const reset = ()=>{
  clearInterval(interv);
  clearInterval(interv2);
  setStatus(0)
  setStatus2(0)
  setTime({ms:0, s:0,m:0,h:0})
  setTime2({ms2:0, s2:0,m2:5,h2:0})
}

  return (
    <div className="App">
     <MainRoutes/>
     
    </div>
  );
}

export default App;
