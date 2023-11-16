import styled from "styled-components";

const HeaderMain = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  flex-direction: row;
  background: transparent;
  align-items: center;
  justify-content: space-between;
  div {
    padding: 0 2%;

    h4 {
      color: white;
    }
  }
`;

function Header() {
  return (
    <HeaderMain>
      <div><img src="/vite.svg" alt="" /></div>
      <div><h4>Global Solution 2023 - Engenharia de Software</h4></div>
    </HeaderMain>
  );
}
export default Header;
