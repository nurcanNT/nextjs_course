import Link from 'next/link';
import React from 'react'
import headerStyle from '../styles/Header.module.css'

const Header = () => {
  return (
    <div>
      <h1 className={headerStyle.title}>Header</h1>
      <nav className='container'>
        <ul>
            <Link href="/"><li>Home</li></Link>
            <Link href="/about"><li>About</li></Link>
            <Link href="/product"><li>Product</li></Link>
        </ul>
      </nav>
    </div>
  )
}

export default Header;
