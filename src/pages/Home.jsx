import React from 'react'
import styled from 'styled-components'
import Characters from '../components/Characters'
import Footer from '../components/Footer'
import Header from '../components/Header'

// const image = new URL(
//   "https://www.advancedsciencenews.com/wp-content/uploads/2022/08/Carina_Webb.jpg", import.meta.url
// );

const Container = styled.div`
  background-image: url("https://www.advancedsciencenews.com/wp-content/uploads/2022/08/Carina_Webb.jpg")
`;

const Home = () => {
  return (
    <>

    <Header/>
    <Container>
    <Characters/>
    <Footer/>
    </Container>
    </>
  )
}

export default Home