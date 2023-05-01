import { Inter } from 'next/font/google'
import {useRouter} from 'next/router'
import headerStyle from '../styles/Header.module.css'
import Meta from "../components/Meta.js";
import Navbar from '@/components/Pages/Home/Navbar.js'
import Slider from '@/components/Pages/Home/Slider.js'


const inter = Inter({ subsets: ['latin'] })

export default function Home({users}) {
  const router = useRouter();
  console.log(users);
  const number = 3;
  return (
    <div>
      <Meta title="Home"/>
    <Navbar/>
    <Slider/>
      </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/users");
  const users = await res.json();
  return{
    props: {
      users,
    }
  }
}