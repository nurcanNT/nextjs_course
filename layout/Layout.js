import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Meta from '@/components/Meta'
import Navbar from '@/components/Navbar'
import React from 'react'

const Layout = ({children}) => {
  return (
    <React.Fragment>
      <Meta/>
      <Navbar/>
      {children}
      <Footer/>
    </React.Fragment>
  )
}

export default Layout
