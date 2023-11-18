import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Routes from '../routes/Router'
const Layout = () => {
  return (
    <>
      <Header/>
      <main>
        <Routes/>
      </main>
      <Footer/>
    </>
  )
}

export default Layout
