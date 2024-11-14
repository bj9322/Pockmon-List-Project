import { useContext } from 'react';
import styled from 'styled-components';
import { PokemonContext } from '../context/PokemonContext';
import PokeballImage from '../assets/pokeball.png';

const DashboardContainer = styled.div`
  border: 3px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 50px 250px 50px 250px;
  text-align: center;
  align-items: center;
  min-height: 350px;
  background-color: white;
`;

const PokemonLittleTitle = styled.h2`
  margin-bottom: 60px;
  font-size: 35px;
`;

const PokemonList = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
`;

const Slot = styled.div`
  text-align: center;
  align-items: center;
`;

const PokemonImage = styled.img`
  align-items: center;
  width: 120px; 
  height: 120px;
`;

const PokeballPlaceholder = styled.img`
  width: 120px;
  height: 120px;
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

function Dashboard() {
  const { selectedPokemon, removePokemon } = useContext(PokemonContext);

  const slots = Array.from({ length: 6 }, (_, index) => selectedPokemon[index]);

  return (
    <DashboardContainer>
      <PokemonLittleTitle>나만의 포켓몬 (최대 6마리)</PokemonLittleTitle>
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
