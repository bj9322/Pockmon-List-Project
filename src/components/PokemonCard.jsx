import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 8px;
  text-align: center;
  cursor: pointer;
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
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/dex/${pokemon.id}`);
  };

  const handleAdd = (e) => {
    e.stopPropagation(); // Prevent navigation when clicking "Add"
    addPokemon(pokemon);
  };

  return (
    <Card onClick={handleNavigate}>
      <PokemonImage src={pokemon.img_url} alt={pokemon.korean_name} />
      <PokemonName>{pokemon.korean_name}</PokemonName>
      <PokemonType>{pokemon.types.join(", ")}</PokemonType>
      <AddButton onClick={handleAdd}>추가</AddButton>
    </Card>
  );
}

export default PokemonCard;
