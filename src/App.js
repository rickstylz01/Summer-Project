import './App.css';
import Header from "./components/header/Header";
// import Home from "./components/homePage/Home";
import Footer from "./components/footer/Footer";
import Flavors from "./components/flavorsPage/Flavors";
// import FlavorCategories from "./components/flavorsPage/FlavorCategories";
function App() {
  return (
    <div className="App">
      <Header />
      {/*<Home />*/}
      <Flavors />
      <Footer />

      {/*<FlavorCategories />*/}
    </div>
  );
}

export default App;
