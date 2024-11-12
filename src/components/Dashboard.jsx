import styled from 'styled-components';
import PokeballImage from '../assets/pokeball.png'; // 포켓볼 이미지 경로 설정

const DashboardContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 16px 0;
  max-width: 800px;
  width: 100%;
  text-align: center;
`;

const PokemonList = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
`;

const Slot = styled.div`
  text-align: center;
`;

const PokemonImage = styled.img`
  width: 50px;
  height: 50px;
`;

const PokeballPlaceholder = styled.img`
  width: 50px;
  height: 50px;
  opacity: 0.5;
`;

const RemoveButton = styled.button`
  padding: 4px 8px;
  background-color: #ff4d4f;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  margin-top: 8px;

  &:hover {
    background-color: #d9363e;
  }
`;

function Dashboard({ selectedPokemon, removePokemon }) {
  // 6개의 슬롯을 준비
  const slots = Array.from({ length: 6 }, (_, index) => selectedPokemon[index]);

  return (
    <DashboardContainer>
      <h2>나만의 포켓몬 (최대 6마리)</h2>
      <PokemonList>
        {slots.map((pokemon, index) => (
          <Slot key={index}>
            {pokemon ? (
              <>
                <PokemonImage src={pokemon.img_url} alt={pokemon.korean_name} />
                <p>{pokemon.korean_name}</p>
                <RemoveButton onClick={() => removePokemon(pokemon.id)}>삭제</RemoveButton>
              </>
            ) : (
              <PokeballPlaceholder src={PokeballImage} alt="Empty Slot" />
            )}
          </Slot>
        ))}
      </PokemonList>
    </DashboardContainer>
  );
}

export default Dashboard;
