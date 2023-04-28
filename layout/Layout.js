import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Meta from '@/components/Meta'
import React from 'react'

const Layout = ({children}) => {
  return (
    <React.Fragment>
      <Meta/>
      <Header/>
      {children}
      <Footer/>
    </React.Fragment>
  )
}

export default Layout
