import './App.css';
import { Header } from "./Components/Header/Header";
import { Searchbox } from "./Components/SearchBar/SearchBox";
import { Renderingnumbers } from "./Components/Numbers/RenderingNumbers";
function App() {
  return (
    <div >
      <Header/>
      <Searchbox/>
      <Renderingnumbers/>

      
    </div>
  );
}

export default App;
