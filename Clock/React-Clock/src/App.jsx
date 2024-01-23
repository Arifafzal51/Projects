import './App.css'
import Header from './Components/Header';
import ClockDetails from './Components/ClockDetails';
import CurrTime from './Components/CurrTime';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  

  return (
    <center>
    <Header></Header>
      <ClockDetails></ClockDetails>
      <CurrTime></CurrTime>
    </center>
  )
}

export default App
