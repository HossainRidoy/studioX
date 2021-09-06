import React from 'react'

import Footer from './footer'
import Header from './header'


const Layout = (props) => {

  return (
    <section>
      <Header />
      {props.children}
      <Footer />
    </section>
  )
}

export default Layout
