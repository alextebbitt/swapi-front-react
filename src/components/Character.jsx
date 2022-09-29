import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding-top: 50px;
`;
const Label = styled.div`
  margin: 19px;
  padding: 15px;
  max-width: 90%;
  border: 1px solid #777;
  border-radius: 25px;
  background-color: white;
  box-shadow: rgba(0,0,0, 0.35) 0px 5px 15px;
`;
const EyeColor = styled.div`
  font-size: 10px;
`;
const Name = styled.div`
  font-size: 20px;
`;
const Height = styled.div`
  font-size: 10px;
`;
const Weight = styled.div`
  font-size: 10px;
`;
const Gender = styled.div`
  font-size: 10px;
`;
const SkinColor = styled.div`
  font-size: 10px;
`;
const HairColor = styled.div`
  font-size: 10px;
`;
const Character = (props) => {
  console.log("this is itemss", props.item);

  return (
    <Container>
      <Label>
        <Name>Name: {props?.item?.name}</Name>
        <Height>Height: {props?.item?.height}</Height>
        <Weight>Weight: {props?.item?.mass}</Weight>
        <Gender>Gender: {props?.item?.gender}</Gender>
        <EyeColor> Eye-Color: {props?.item?.eye_color}</EyeColor>
        <SkinColor> Skin-Color: {props?.item?.skin_color}</SkinColor>
        <HairColor> Hair-Color: {props?.item?.hair_color}</HairColor>
      </Label>
    </Container>
  );
};

export default Character;
