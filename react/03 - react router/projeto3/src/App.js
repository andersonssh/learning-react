import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Company from './pages/Company';
import Contact from './pages/Contact';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';

function App(){
  return (
    <Router>
      {/**Conteudo fora de routes é inalterado! */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/empresa" element={<Company />}> </Route>
        <Route path="/contato" element={<Contact />}> </Route>
      </Routes>
      <Footer />
    </Router>
    )
}

export default App;
