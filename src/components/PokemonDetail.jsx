import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import MOCK_DATA from '../MOCK_DATA';

const DetailContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

const PokemonImage = styled.img`
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
`;

const PokemonName = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

const PokemonType = styled.p`
  font-size: 18px;
  color: #555;
`;

const Description = styled.p`
  font-size: 16px;
  color: #333;
  margin-top: 10px;
`;

const BackButton = styled.button`
  padding: 10px 20px;
  font-size: 14px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #0056b3;
  }
`;

function PokemonDetail() {
  const { pokemonId } = useParams();
  const navigate = useNavigate();
  const pokemon = MOCK_DATA.find((p) => p.id === parseInt(pokemonId, 10));

  if (!pokemon) {
    return <p>포켓몬 정보를 찾을 수 없습니다.</p>;
  }

  return (
    <DetailContainer>
      <PokemonImage src={pokemon.img_url} alt={pokemon.korean_name} />
      <PokemonName>{pokemon.korean_name}</PokemonName>
      <PokemonType>{pokemon.types.join(', ')}</PokemonType>
      <Description>{pokemon.description}</Description>
      <BackButton onClick={() => navigate(-1)}>뒤로 가기</BackButton>
    </DetailContainer>
  );
}

export default PokemonDetail;
