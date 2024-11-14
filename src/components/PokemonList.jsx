import PokemonCard from './PokemonCard';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px;
`;

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 16px;
  background-color: white;
`;

function PokemonList({ data, addPokemon }) {
  return (
    <Wrapper>
      <ListContainer>
        {data.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} addPokemon={addPokemon} />
        ))}
      </ListContainer>
    </Wrapper>
  );
}

export default PokemonList;

