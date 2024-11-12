import PokemonCard from './PokemonCard';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr); /* 한 줄에 7개의 카드 */
  gap: 16px;
  max-width: 800px;
  width: 100%;
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
