
import './App.css';
import { Navbar } from './components/navbar';
import Mint from './components/Mint';
import Roadmap from './components/roadmap';


function App() {
  return (
    <div className="App">
          <Navbar/>
          <Mint/>
          <Roadmap/>
    </div>
  );
}

export default App;
