import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import {useRouter} from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home({users}) {
  const router = useRouter();
  console.log(users);
  const number = 3;
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className='title'>Home</h1>
      <style jsx>
        {`
        .title{
          display: ${number > 2 ? "block" : "none"}; {/*write js code inside css code !!!*/}
          color:blue;
        }
        `}
      </style>
      <h2>User List</h2>
      {users.map((user)=>(
        <h4 key={user.id} onClick={()=>{router.push(`user/${user.id}`)}} style={{color:"purple", cursor:"pointer"}}><span style={{color: "red", fontWeight: 700}}>{user.id}</span>-{user.name}</h4>
      ))}
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return{
    props: {
      users,
    }
  }
}