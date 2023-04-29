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
  style={{
    width: 729,
    height: 636,
    position: "relative",
    overflow: "hidden",
    borderRadius: 45,
    background: "linear-gradient(134.69deg, #f60000 -22.05%, #3959ff 98.57%)",
  }}
>
  <div style={{ width: 552, height: 578 }}>
    <svg
      width={552}
      height={513}
      viewBox="0 0 552 513"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: 552, height: 513, position: "absolute", left: 91, top: 58 }}
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
    <div style={{ width: 438, height: 548, position: "absolute", left: 145, top: 88 }}>
      <p
        style={{
          width: 266,
          height: 67,
          position: "absolute",
          left: 86,
          top: 160,
          fontSize: 45,
          fontWeight: 700,
          textAlign: "center",
          color: "#fff8f8",
        }}
      >
        Nuntium Aya
      </p>
      <p
        style={{
          width: 438,
          height: 286,
          position: "absolute",
          left: 0,
          top: 262,
          fontSize: 35,
          textAlign: "center",
          color: "#fffcfc",
        }}
      >
        You know wake up the pencil. what are you doing Aya me too
      </p>
    </div>
  </div>
</div>;
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