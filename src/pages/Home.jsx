import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PokemonLogo from "../assets/pokemon-logo.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

const Logo = styled.img`
  width: 300px;
  height: 200px;
  margin-bottom: 20px;
`;

const StartButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: white;
  background-color: #ffcc00;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

function Home() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/dex");
  };

  return (
    <Container>
      <Logo src={PokemonLogo} alt="Pokemon Logo" />
      <StartButton onClick={handleStart}>포켓몬 도감 시작하기</StartButton>
    </Container>
  );
}

export default Home;
