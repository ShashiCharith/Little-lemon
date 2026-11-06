import './App.css';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <div className="app-grid-container">
    <Header />
    <Nav />
    <Main />
    <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
