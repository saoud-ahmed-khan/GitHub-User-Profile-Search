import './App.css';
import { Header } from "./Components/Header/Header";
import { Searchbox } from "./Components/SearchBar/SearchBox";
import { Renderingnumbers } from "./Components/Numbers/RenderingNumbers";
import { Middlesection } from "./Components/MiddleSecction/MiddleSection";
function App() {
  return (
    <div >
      <Header/>
      <Searchbox/>
      <Renderingnumbers/>
      <Middlesection/>

      
    </div>
  );
}

export default App;
