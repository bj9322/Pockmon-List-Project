import styled from 'styled-components';
import Dashboard from '../components/Dashboard';
import PokemonList from '../components/PokemonList';


const Poketitle = styled.h1`
  text-align: center;
  font-size: 50px;
`

function Dex({ data, selectedPokemon, addPokemon, removePokemon }) {
  return (
    <div>
      <Poketitle>포켓몬 도감</Poketitle>
      <Dashboard selectedPokemon={selectedPokemon} removePokemon={removePokemon} />
      <PokemonList data={data} addPokemon={addPokemon} />
    </div>
  );
}

export default Dex;

