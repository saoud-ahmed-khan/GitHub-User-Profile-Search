import './App.css';
import { Header } from "./Components/Header/Header";
import { Searchbox } from "./Components/SearchBar/SearchBox";
import { Renderingnumbers } from "./Components/Numbers/RenderingNumbers";
import { Middlesection } from "./Components/MiddleSecction/MiddleSection";
import { Repos } from "./Components/repos/Repos";
import { Contextprovider
 } from "./Components/Context/ContextProvider";
function App() {
  return (
    <div >
      <Header/>
      <Searchbox/>
      <Renderingnumbers/>
      <Middlesection/>
      <Repos/> 
      <Contextprovider/>    
    </div>
  );
}

export default App;
