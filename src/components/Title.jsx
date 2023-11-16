import styled from "styled-components";

const TitleX = styled.div`
display: flex;
justify-content: center;
  width: 100%;
  margin: 4% 0;
  @media (max-width: 768px){
    margin: 4% 0%;
  }
`;
const TitleSectionF = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  @media (max-width: 768px){
  width: 100%;
  }
`;

const TitleSection_H3 = styled.h3`
  font-size: 15px;
  font-weight: 600;
  color: #3c55cb;
  text-transform: uppercase;
  margin: -1%;
`;
const TitleSection_H2 = styled.h3`
  font-size: 34px;
  margin-bottom: -1px;
  font-weight: 800;
  @media (max-width: 768px){
    font-size: 27px
  }

`;
const TitleSection_P = styled.p`
  font-size: 15px;
  @media (max-width: 768px){
    font-size: 14px
  }
`;

const Title = ({ title, caption, text }) => {
  return (
    <TitleX>
      <TitleSectionF>
        <TitleSection_H3>{title}</TitleSection_H3>
        <TitleSection_H2>{caption}</TitleSection_H2>
        <TitleSection_P>{text}</TitleSection_P>
      </TitleSectionF>
    </TitleX>
  );
};

export default Title;