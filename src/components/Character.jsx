import React from "react";
import styled from "styled-components";

const Container = styled.div`
font-size: 30px;
display: flex;
`;
const Label = styled.div`
  font-size: 30px;
`;

const Character = (props) => {
  console.log("this is itemss", props.item);

  return (
    
     <Container>
      <Label>
      {/* {JSON.stringify(props.item)} */}
      
      {props?.item?.name}
      
      </Label>
       </Container>
    
  );
};

export default Character;
