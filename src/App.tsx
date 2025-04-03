import './App.css'
import Title from './components/title';
import Intro from './components/intro';
import Hobby1 from "./components/hobby1";
import Hobby2 from "./components/hobby2";

const App =() => {
  return (
      <div>
          <Title/>
          <Intro name1="Lucien" name2="Maggie"/>
          <br/>
          <Hobby1/>
          <br/>
          <Hobby2/>
      </div>
  )
}

export default App
