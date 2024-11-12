import Dashboard from '../components/Dashboard';
import PokemonList from '../components/PokemonList';

function Dex({ data, selectedPokemon, addPokemon, removePokemon }) {
  return (
    <div>
      <h1>포켓몬 도감</h1>
      <Dashboard selectedPokemon={selectedPokemon} removePokemon={removePokemon} />
      <PokemonList data={data} addPokemon={addPokemon} />
    </div>
  );
}

export default Dex;

