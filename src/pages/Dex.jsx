import styled from 'styled-components';
import Dashboard from '../components/Dashboard';
import PokemonList from '../components/PokemonList';

const Poketitle = styled.h1`
  text-align: center;
  font-size: 50px;
`

function Dex({ data }) {
  return (
    <div>
      <Poketitle>포켓몬 도감</Poketitle>
      <Dashboard />
      <PokemonList data={data} />
    </div>
  );
}

export default Dex;
