import './App.css';
import {Route, Routes} from 'react-router-dom'
import Home from "./components/homePage/Home";
import Flavors from "./components/flavorsPage/Flavors";
import FlavorCategories from "./components/flavorsPage/flavorCategories/FlavorCategories";
import HeaderFooterWrapper from "./components/HeaderFooterWrapper";

function App() {
  return (
    <Routes>
      <Route element={<HeaderFooterWrapper />}>
        <Route exact path="/" element={<Home />} />
        <Route path='/flavors' element={<Flavors />} />
        <Route path='/flavors/categories/:category' element={<FlavorCategories />} />
      </Route>
    </Routes>
  );
}

export default App;
