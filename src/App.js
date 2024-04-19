import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { Technology } from './components/Technology';
import BoostrapComponent from './components/BoostrapComponent';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Footer />
      <BoostrapComponent Title ={'Title Test 1'}/>
      <BoostrapComponent Title ={'Title Test 2'}/>
      <BoostrapComponent Title ={'Title Test 3'}/>
      <BoostrapComponent Title ={'Title Test 4'}/>
    </div>
  );
}

export default App;
