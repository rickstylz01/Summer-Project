import './App.css';
import Header from "./components/header/Header";
import Home from "./components/homePage/Home";
import QuoteForm from "./components/quoteForm/QuoteForm";
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <QuoteForm />
    </div>
  );
}

export default App;
