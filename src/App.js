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
      <footer style = {{backgroundColor:'#ece4e4',color:'#695f58',textAlign:'center',padding:'1em'}}>© 2021 Kan's Portfolio all right reserved.</footer>
    </div>
  );
}

export default App;
