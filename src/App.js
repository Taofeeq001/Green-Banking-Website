import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Generation from './components/Generation';
import Choosebank from './components/Choosebank';
import Articles from './components/Articles';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Generation />
      <Choosebank />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
