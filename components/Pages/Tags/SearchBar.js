import React from 'react'

const SearchBar = () => {
  return (
    <div>
      <div style={{ width: 707, height: 60 }}>
  <div
    style={{
      width: 707,
      height: 60,
      position: "absolute",
      left: "329.5px",
      top: "280.5px",
      borderRadius: 25,
      borderWidth: 1,
      borderColor: "#000",
    }}
  />
  <svg
    width={30}
    height={30}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: 30, height: 30, position: "absolute", left: 981, top: 296 }}
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
  <p
    style={{
      width: 275,
      height: 20,
      position: "absolute",
      left: 353,
      top: 300,
      fontSize: 16,
      textAlign: "left",
      color: "#000",
    }}
  >
    Technology
  </p>
</div>
    </div>
  )
}

export default SearchBar
