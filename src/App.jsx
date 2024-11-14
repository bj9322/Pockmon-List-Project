import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dex from './pages/Dex';
import PokemonDetail from './components/PokemonDetail';
import { PokemonProvider } from './context/PokemonProvider';
import MOCK_DATA from './MOCK_DATA';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #fff9c4;
  }
`;

function App() {
  return (
    <>
    <GlobalStyle></GlobalStyle>
    <PokemonProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dex" element={<Dex data={MOCK_DATA} />} />
          <Route path="/dex/:pokemonId" element={<PokemonDetail />} />
        </Routes>
      </Router>
    </PokemonProvider>
    </>
  );
  
}

export default App;
