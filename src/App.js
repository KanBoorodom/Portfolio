import './App.css';
import Navbar from './Component/Navbar'
import Header from './Component/Header';
import About from './Component/About';
import Project from './Component/Project';
import Contact from './Component/Contact';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
