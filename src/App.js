import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import Home from './components/pages/Home';
import Empresa from './components/pages/Empresa';
import Contato from './components/pages/Contato';
import NovoProjeto from './components/pages/NovoProjeto';

import Container from './components/layout/Container';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Link to="/" >Home</Link>
          <Link to="/empresa">Empresa</Link>
          <Link to="/contato">Contato</Link>
          <Link to="/novoprojeto">Novo Projeto</Link>
        </div>
        <Container customClass="min-height">
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/empresa' element={<Empresa/>}/>
          <Route exact path='/contato' element={<Contato/>}/>
          <Route exact path='/novoprojeto' element={<NovoProjeto/>}/>  
        </Routes>
        </Container>
        <p>Footer</p>
      </Router>
    </div>
  );
}

export default App;
