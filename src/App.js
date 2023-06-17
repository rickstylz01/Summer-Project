import './App.css';
import Header from "./components/header/Header";
import Home from "./components/homePage/Home";
import Quote from "./components/quoteForm/Quote";
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Quote />
    </div>
  );
}

export default App;
