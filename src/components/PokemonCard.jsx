import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 8px;
  text-align: center;
`;

const PokemonImage = styled.img`
  width: 100px;
  height: 100px;
`;

const PokemonName = styled.h3`
  margin: 8px 0;
`;

const PokemonType = styled.p`
  color: #555;
`;

const AddButton = styled.button`
  padding: 8px 12px;
  margin-top: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #0056b3;
  }
`;

function PokemonCard({ pokemon, addPokemon }) {
  const handleAdd = (e) => {
    e.stopPropagation();
    addPokemon(pokemon);
  };

  return (
    <Card>
<Link to={`/dex/${pokemon.id}`} style={{ textDecoration: 'none' }}>
  <PokemonImage src={pokemon.img_url} alt={pokemon.korean_name} />
  <PokemonName>{pokemon.korean_name}</PokemonName>
  <PokemonType>{pokemon.types.join(', ')}</PokemonType>
</Link>
      <AddButton onClick={handleAdd}>추가</AddButton>
    </Card>
  );
}

export default PokemonCard;

