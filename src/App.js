import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
function App() {
  return (
    <div className="App">
      <h1>Movies Box</h1>
      {/* search field */}
      <Search/>
      {/* movie display using api */}
    </div>
  );
}

export default App;
