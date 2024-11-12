import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dex from './pages/Dex';
import MOCK_DATA from './MOCK_DATA';
import PokemonDetail from './components/PokemonDetail';


function App() {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

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
  );
}

export default App;

