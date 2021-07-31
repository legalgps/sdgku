import "./App.css";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import Catalog from "./components/catalog";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>

      <Catalog></Catalog>
      <Footer></Footer>
    </div>
  );
}

export default App;
