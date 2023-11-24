import styled from "styled-components";

export const BandDiv = styled.div`
  display: flex;
  background-color: #3c55cb;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='199' viewBox='0 0 100 199'%3E%3Cg fill='%23fefefe' fill-opacity='0.06'%3E%3Cpath d='M0 199V0h1v1.99L100 199h-1.12L1 4.22V199H0zM100 2h-.12l-1-2H100v2z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  margin: 3rem 0;

  @media (max-width: 375px) {
  }
  @media (max-width: 1200px) {
    padding-top: 3rem;
    padding-bottom: 5rem;
  }
`;