import Link from 'next/link';
import headerStyle from '../styles/Header.module.css'
import { useRouter } from 'next/router';

const Header = () => {
    const router = useRouter();
    console.log(router);
  return (
    <div>
      <h1 className={headerStyle.title}>Header</h1>
      <nav className='container'>
        <ul>
            <Link href="/"><li>Home</li></Link>   {/*<Link href="/"><li onClick={()=>router.back()}>Home</li></Link> */}
            <Link href="/about"><li>About</li></Link>
            <Link href="/product"><li>Product</li></Link>
            <Link href="/user"><li>User</li></Link>
        </ul>
      </nav>
    </div>
  )
}

export default Header;
