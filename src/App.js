import './App.css';
import { Header } from "./Components/Header/Header";
import { Searchbox } from "./Components/SearchBar/SearchBox";
import { Renderingnumbers } from "./Components/Numbers/RenderingNumbers";
import { Middlesection } from "./Components/MiddleSecction/MiddleSection";
import { Repos } from "./Components/repos/Repos";
function App() {
  return (
    <div >
      <Header/>
      <Searchbox/>
      <Renderingnumbers/>
      <Middlesection/>
      <Repos/>     
    </div>
  );
}

export default App;
