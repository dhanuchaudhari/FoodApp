
import './App.css';
import Navbar from './com/Navbar';
import Hero from './com/Hero';
import HeadlineCards from './com/HeadlineCards';
import Food from './com/Food';
function App() {
  return (
    <div className="App">
     <Navbar />
     <Hero/>
     <HeadlineCards/>
    <Food/>
    </div>
  );
}

export default App;
