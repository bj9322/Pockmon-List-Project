import { useState, useEffect } from 'react';
import { PokemonContext } from './PokemonContext';

export const PokemonProvider = ({ children }) => {
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
    <PokemonContext.Provider value={{ selectedPokemon, addPokemon, removePokemon }}>
      {children}
    </PokemonContext.Provider>
  );
};
