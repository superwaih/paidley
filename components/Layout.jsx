import React from 'react'
import Footer from './landing-page-components/Footer'
import Nav from './landing-page-components/Nav'

const Layout = ({children}) => {
  return (
    <>
    <Nav />
    {children}
    <Footer />
    </>
  )
}

export default Layout