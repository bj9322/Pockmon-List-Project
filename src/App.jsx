import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dex from './pages/Dex';
import PokemonDetail from './components/PokemonDetail';
import MOCK_DATA from './MOCK_DATA';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #fff9c4;
  }
`;

function App() {

  const [selectedPokemon, setSelectedPokemon] = useState(() => {
    const storedPokemon = localStorage.getItem('selectedPokemon');
    return storedPokemon ? JSON.parse(storedPokemon) : [];
  });


  useEffect(() => {
    localStorage.setItem('selectedPokemon', JSON.stringify(selectedPokemon));
  }, [selectedPokemon]);

  const addPokemon = (pokemon) => {
    if (selectedPokemon.length >= 6) {
      alert("최대로 선택할 수 있는 포켓몬은 6개 입니다.");
      return;
    }
    if (selectedPokemon.some((p) => p.id === pokemon.id)) {
      alert("중복된 포켓몬은 선택할 수 없습니다.");
      return;
    }
    setSelectedPokemon([...selectedPokemon, pokemon]);
  };

  const removePokemon = (pokemonId) => {
    setSelectedPokemon(selectedPokemon.filter((p) => p.id !== pokemonId));
  };

  return (
    <>
    <GlobalStyle></GlobalStyle>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/dex" 
          element={<Dex data={MOCK_DATA} selectedPokemon={selectedPokemon} addPokemon={addPokemon} removePokemon={removePokemon} />} 
        />
        <Route path="/dex/:pokemonId" element={<PokemonDetail />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
