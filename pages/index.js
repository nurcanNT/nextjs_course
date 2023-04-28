import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import {useRouter} from 'next/router'
import Meta from "../components/Meta.js";

const inter = Inter({ subsets: ['latin'] })

export default function Home({users}) {
  const router = useRouter();
  console.log(users);
  const number = 3;
  return (
    <div>
      <Meta title="Home"/>

      <div
  className="w-[729px] h-[636px] relative overflow-hidden rounded-[45px]"
  style={{ background: "linear-gradient(134.69deg, #f60000 -22.05%, #3959ff 98.57%)" }}
>
  <div className="w-[552px] h-[578px]">
    <svg
      width={552}
      height={513}
      viewBox="0 0 552 513"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[552px] h-[513px] absolute left-[91px] top-[58px]"
      preserveAspectRatio="none"
    >
      <circle cx={65} cy={65} r={65} fill="url(#paint0_linear_5_29)" />
      <circle cx={487} cy={65} r={65} fill="url(#paint1_linear_5_29)" />
      <circle cx={487} cy={448} r={65} fill="url(#paint2_linear_5_29)" />
      <circle cx={65} cy={448} r={65} fill="url(#paint3_linear_5_29)" />
      <defs>
        <lineargradient
          id="paint0_linear_5_29"
          x1={117}
          y1={29}
          x2={81}
          y2={50}
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset={1} stop-color="#FF7A00" />
        </lineargradient>
        <lineargradient
          id="paint1_linear_5_29"
          x1={552}
          y1="-0.00000458956"
          x2={475}
          y2={73}
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F7F8FF" />
          <stop offset={1} stop-color="#001894" />
        </lineargradient>
        <lineargradient
          id="paint2_linear_5_29"
          x1={500}
          y1={390}
          x2={477}
          y2={420}
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#D9D9D9" />
          <stop offset={1} stop-color="#FF0000" />
        </lineargradient>
        <lineargradient
          id="paint3_linear_5_29"
          x1={114}
          y1={395}
          x2={65}
          y2={448}
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F8F8F8" />
          <stop offset={1} />
        </lineargradient>
      </defs>
    </svg>
    <div className="w-[438px] h-[548px] absolute left-[145px] top-[88px]">
      <p className="w-[266px] h-[67px] absolute left-[86px] top-40 text-[45px] font-bold text-center text-[#fff8f8]">
        Nuntium Aya
      </p>
      <p className="w-[438px] h-[286px] absolute left-0 top-[262px] text-[35px] text-center text-[#fffcfc]">
        You know wake up the pencil. what are you doing Aya me too
      </p>
     
    </div>
  </div>
</div>;
      
      <div style={{
        position: "relative",
      }}>
        <Image src="https://cdn1.ntv.com.tr/gorsel/KMOzyysRhUmdQ043Hkcqcg.jpg?width=1000&mode=crop&scale=both" width={300} height={300} alt="" />
      </div>
     
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
  const res = await fetch("http://localhost:3000/api/users");
  const users = await res.json();
  return{
    props: {
      users,
    }
  }
}