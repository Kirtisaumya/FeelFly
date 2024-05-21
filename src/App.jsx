import './App.css';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';

function App() {
  return ( 
    <>
    <div className="App flex flex-col h-screen">
      <Navbar/>
      <Hero/>
      
    </div>
    </>
  );
}

export default App;
