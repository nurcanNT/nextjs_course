import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
    const router = useRouter();
    console.log(router);
  return (
    <div style={{
        position: 'relative',
        overflow: 'hidden',}}>
      <div style={{ width: 1316, height: 57 }}>
  <div style={{ width: 186, height: 46 }}>
    <div style={{ width: 135, height: 46 }}>
      <div
        style={{
          width: 135,
          height: 46,
          position: "absolute",
          left: 1205,
          top: 34,
          borderRadius: 10,
          borderWidth: 2,
          borderColor: "#1c1c1c",
        }}
      />
      <p
        style={{
          width: 135,
          height: 23,
          position: "absolute",
          left: 1206,
          top: 47,
          fontSize: 20,
          textAlign: "center",
          color: "#1c1c1c",
          cursor: 'pointer',
        }}
      >
        Login
      </p>
    </div>
    <svg
      width={30}
      height={30}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: 30, height: 30, position: "absolute", left: 1155, top: 43,  cursor: 'pointer', }}
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M13.75 23.75C19.2728 23.75 23.75 19.2728 23.75 13.75C23.75 8.22715 19.2728 3.75 13.75 3.75C8.22715 3.75 3.75 8.22715 3.75 13.75C3.75 19.2728 8.22715 23.75 13.75 23.75Z"
        stroke="black"
        stroke-width={2}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M26.25 26.25L20.8125 20.8125"
        stroke="black"
        stroke-width={2}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
  <div style={{ width: 465, height: 57 }}>
    <p onClick={() => router.push('/')}
      style={{
        width: 69,
        height: 20,
        position: "absolute",
        left: 234,
        top: 49,
        fontSize: 20,
        fontWeight: 700,
        textAlign: "left",
        color: "#000",
        cursor: 'pointer',
      }}
    >
      Home
    </p>
    <p onClick={() => router.push('/tags')}
      style={{
        width: 53,
        height: 20,
        position: "absolute",
        left: 334,
        top: 49,
        fontSize: 20,
        textAlign: "left",
        color: "#000",
        cursor: 'pointer',
      }}
    >
      {" "}
      Tags
    </p>
    <p onClick={() => router.push('/about')}
      style={{
        width: 72,
        height: 20,
        position: "absolute",
        left: 418,
        top: 49,
        fontSize: 20,
        textAlign: "left",
        color: "#000",
        cursor: 'pointer',
      }}
    >
      About
    </p>
    <div style={{ width: 178, height: 57 }}>
      <p onClick={() => router.push('/')}
        style={{
          width: 162,
          height: 31,
          position: "absolute",
          left: 41,
          top: 48,
          fontSize: 30,
          fontWeight: 700,
          textAlign: "left",
          color: "#1c1c1c",
          cursor: 'pointer',
        }}
      >
        nuntium.
      </p>
      <div
        style={{
          width: 58,
          height: 57,
          position: "absolute",
          left: "24.5px",
          top: "30.5px",
          background: "#1c1c1c",
        }}
      />
      <p onClick={() => router.push('/')}
        style={{
          width: 162,
          height: 31,
          position: "absolute",
          left: 41,
          top: 48,
          fontSize: 30,
          fontWeight: 700,
          textAlign: "left",
          color: "#fff",
          cursor: 'pointer',
        }}
      >
        nu
      </p>
    </div>
  </div>
</div>

    </div>
  )
}

export default Navbar
