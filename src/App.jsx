import styled from "styled-components";
import "./App.css";
import WidgetContainer from "./pages/WidgetContainer";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  background: linear-gradient(180deg, #373E44 -100%, #191B1F 100%);
  margin: 1rem 0rem;
  width: 100%;
  height: 95vh;
  justify-content: space-between;
  box-shadow: 10px 10px 40px 10px #00000080;
  border-radius: 28px;
`;
const Container = styled.div`
  color: white;
  padding: 40px;
  width: 50%;
`;

const InnerContainer = styled.div`
  border: 1px solid #96BEE7;
  background: #616161D1;
  border-radius: 27px;
  height: 100%;
`
function App() {
  return <Wrapper>
    <Container>
      <InnerContainer />
    </Container>
    <Container>
      <WidgetContainer />
    </Container>
  </Wrapper>;
}

export default App;
