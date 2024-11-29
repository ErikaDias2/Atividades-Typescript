import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SolteiroSimples from './pages/SolteiroSimples';
import CasalSimples from './pages/CasalSimples';
import FamiliaMais from './pages/FamiliaMais';
import FamiliaSimples from './pages/FamiliaSimples';
import FamiliaSuper from './pages/FamiliaSuper';
import SolteiroMais from './pages/SolteiroMais';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/casal-simples" element={<CasalSimples />} />
        <Route path='/familia-mais' element={<FamiliaMais />} />
        <Route path='/familia-simples' element={<FamiliaSimples />} />
        <Route path='/familia-super' element={<FamiliaSuper />} />
        <Route path='/solteiro-mais' element={<SolteiroMais />} />
        <Route path="/solteiro-simples" element={<SolteiroSimples />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
