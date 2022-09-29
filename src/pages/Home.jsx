import React from 'react'
import Background from '../components/Background'
import Characters from '../components/Characters'
import Footer from '../components/Footer'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'


const Home = () => {
  return (
    <>
    <Background>

     <Header/>
    <SearchBar/>
    <Characters/>
    <Footer/>
    </Background>
    </>
  )
}

export default Home