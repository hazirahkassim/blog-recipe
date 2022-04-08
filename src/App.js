import './App.css';
import Header from './components/Header';
import Ingredient from './components/Ingredient';
import Instruction from './components/Instruction';


function App() {
  return (
    <>
    <div className = "Top">
      <div><Header/></div>
      <div><Ingredient/></div>
      <div><Instruction/></div>
    </div>
    </>
  );
}

export default App;
