import React from 'react'

const Slider = () => {
  return (
    <div style={{position: 'relative',
    overflow: 'hidden',}}>
      <div style={{ width: 1316, height: 792 }}>
  <img
    style={{ width: 1316, height: 592, position: "absolute", left: "24.5px", top: "130.5px" }}
    src="article-image.png"
  />
  <div style={{ width: 509, height: 483 }}>
    <div
      style={{
        width: 509,
        height: 483,
        position: "absolute",
        left: "69.5px",
        top: "130.5px",
        background: "#fff",
      }}
    />
    <p
      style={{
        width: 430,
        height: 151,
        position: "absolute",
        left: 109,
        top: 367,
        fontSize: 16,
        textAlign: "left",
        color: "#000",
      }}
    >
      Proident aliquip velit qui commodo officia qui consectetur dolor ullamco aliquip elit
      incididunt. Ea minim ex consectetur excepteur. Ex laborum nostrud mollit sint consectetur
      Lorem amet aliqua do enim. Commodo duis dolor anim excepteur. In aliquip mollit nulla
      consequat velit magna.
    </p>
    <div style={{ width: 332, height: 22 }}>
      <p
        style={{
          width: 198,
          height: 22,
          position: "absolute",
          left: 243,
          top: 331,
          textAlign: "left",
          color: "rgba(28,28,28,0.5)",
        }}
      >
        <span
          style={{
            width: 198,
            height: 22,
            fontSize: 16,
            textAlign: "left",
            color: "rgba(28,28,28,0.5)",
          }}
        >
          May 7, 2019{" "}
        </span>
        <span
          style={{
            width: 198,
            height: 22,
            fontSize: 14,
            textAlign: "left",
            color: "rgba(28,28,28,0.5)",
          }}
        >
          (10 mins read)
        </span>
      </p>
      <svg
        width={3}
        height={3}
        viewBox="0 0 3 3"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: "absolute", left: "229.5px", top: "341.5px" }}
        preserveAspectRatio="xMidYMid meet"
      >
        <circle cx="1.5" cy="1.5" r="1.5" fill="#1C1C1C" fill-opacity="0.5" />
      </svg>
      <p
        style={{
          width: 112,
          height: 22,
          position: "absolute",
          left: 109,
          top: 331,
          fontSize: 16,
          textAlign: "left",
          color: "rgba(28,28,28,0.5)",
        }}
      >
        Ralph Hawkins
      </p>
    </div>
    <p
      style={{
        width: 430,
        height: 83,
        position: "absolute",
        left: 109,
        top: 236,
        fontSize: 33,
        fontWeight: 700,
        textAlign: "left",
        color: "#000",
      }}
    >
      World’s Most Dangerous Technology Ever Made.
    </p>
    <p
      style={{
        width: 189,
        height: 29,
        position: "absolute",
        left: 109,
        top: 207,
        fontSize: 20,
        textAlign: "left",
        color: "rgba(28,28,28,0.5)",
      }}
    >
      FEATURED ARTICLE
    </p>
  </div>
</div>
    </div>
  )
}

export default Slider
