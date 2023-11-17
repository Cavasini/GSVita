import styled from "styled-components";

export const BandDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  background-color: #3c55cb;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='199' viewBox='0 0 100 199'%3E%3Cg fill='%23fefefe' fill-opacity='0.06'%3E%3Cpath d='M0 199V0h1v1.99L100 199h-1.12L1 4.22V199H0zM100 2h-.12l-1-2H100v2z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  margin: 3rem 0;

  @media (max-width: 375px) {
      margin: 18rem 0 0 0;
  }
  @media (max-width: 1200px) {
    padding-top: 3rem;
    padding-bottom: 5rem;
  }

  h3 {
    font-size: 28px;
    width: 50%;
    margin-bottom: -1rem;
    @media (max-width: 1200px) {
      font-size: 18px;
      width: 100%;
      text-align: center;
    }
  }
  .container {
    width: 52%;
    height: 22rem;
    position: relative;
    overflow: hidden;
    margin: 3rem 0;
    border-radius: 0.8rem;
    background-color: black;
    @media (max-width: 1200px) {
      display: none;
    }
    img {
      width: 100%;
      height: auto;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 0.8;
    }
  }
`;
