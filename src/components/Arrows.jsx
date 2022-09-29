import React from 'react'
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;


const Arrows = () => {
  return (
    <Container>
      <ChevronLeftIcon
        style={{ color: "white", fontSize: 100 }}
      ></ChevronLeftIcon>
      <ChevronRightIcon
        style={{ color: "white", fontSize: 100 }}
      ></ChevronRightIcon>
    </Container>
  );
}

export default Arrows