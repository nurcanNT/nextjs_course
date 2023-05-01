import Footer from '@/components/Footer'
import Meta from '@/components/Meta'
import Slider from '@/components/Pages/Home/Slider'
import Home from '@/pages'
import React from 'react'

const Layout = ({children}) => {
  return (
    <React.Fragment>
      <Meta/>
      <Home/>
      {children}
      <Footer/>
    </React.Fragment>
  )
}

export default Layout
