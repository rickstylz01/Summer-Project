import './App.css';
import Header from "./components/header/Header";
import Home from "./components/homePage/Home";
import Flavors from "./components/flavorsPage/Flavors";
import FlavorCategories from "./components/flavorsPage/flavorCategories/FlavorCategories";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      {/*<Flavors />*/}
      {/*<FlavorCategories />*/}
      <Footer />
    </div>
  );
}

export default App;
