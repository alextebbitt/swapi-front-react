import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding-top: 50px;
`;
const Wrapper = styled.div`
  margin: 19px;
  padding: 15px;
  max-width: 90%;
  border: 1px solid #777;
  border-radius: 25px;
  background-color: white;
  box-shadow: rgba(0,0,0, 0.35) 0px 5px 15px;
`;
const EyeColor = styled.div`
  font-size: 15px;
`;
const Name = styled.div`
  font-size: 25px;
  padding-bottom: 10px; 
`;
const Height = styled.div`
  font-size: 15px;
`;
const Weight = styled.div`
  font-size: 15px;
`;
const Gender = styled.div`
  font-size: 15px;
`;
const SkinColor = styled.div`
  font-size: 15px;
`;
const HairColor = styled.div`
  font-size: 15px;
`;
const BirthYear = styled.div`
  font-size: 15px;
`;

const Info = styled.div`
  display: flex
  flex-direction: column;
  column-count: 4;
`;

const Character = (props) => {
  
  return (
    <Container>
      <Wrapper>
        <Name>Name: {props?.item?.name}</Name>
        <Info>
          <Height>Height: {props?.item?.height}cm</Height>
          <Weight>Weight: {props?.item?.mass}kg</Weight>
          <Gender>Gender: {props?.item?.gender}</Gender>
          <EyeColor> Eye-Color: {props?.item?.eye_color}</EyeColor>
          <SkinColor> Skin-Color: {props?.item?.skin_color}</SkinColor>
          <HairColor> Hair-Color: {props?.item?.hair_color}</HairColor>
          <BirthYear> Birth-year: {props?.item?.birth_year}</BirthYear>
        </Info>
      </Wrapper>
    </Container>
  );
};

export default Character;
