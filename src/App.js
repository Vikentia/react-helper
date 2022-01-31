
import './App.css';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Content from './components/Content';

function App() {
  return (
    <div className="App">
      <div className="App-header">

        <Header />
      </div>
      <div className="App-main">
        <div className="App-nav">
          <Navigation />
        </div>
        <div className="App-content">
          <Content />
        </div>
      </div>
    </div>
  );
}

export default App;
