
import './App.css';
import Navigation from './pages/Navigation';
import Header from './pages/Header';
import Content from './pages/Content';
import Footer from './pages/Footer';

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
      <div className="App-footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
