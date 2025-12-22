const IcoEngine: React.FC = (props) => (
  <svg
    width={30}
    height={30}
    viewBox="0 0 512 512"
    id="svg1"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs id="defs1">
      <linearGradient id="linearGradient6">
        <stop
          style={{
            stopColor: "#1b1325",
            stopOpacity: 1,
          }}
          offset={0.02589923}
          id="stop7"
        />
        <stop
          style={{
            stopColor: "#16142d",
            stopOpacity: 0.99642217,
          }}
          offset={1}
          id="stop8"
        />
      </linearGradient>
      <linearGradient id="linearGradient4">
        <stop
          style={{
            stopColor: "#ffffff",
            stopOpacity: 1,
          }}
          offset={0.00143885}
          id="stop14"
        />
        <stop
          style={{
            stopColor: "#ffffff",
            stopOpacity: 0.46869409,
          }}
          offset={0.15971223}
          id="stop5"
        />
        <stop
          style={{
            stopColor: "#0e589e",
            stopOpacity: 0.06440072,
          }}
          offset={1}
          id="stop6"
        />
      </linearGradient>
      <linearGradient id="linearGradient2">
        <stop
          style={{
            stopColor: "#4411a3",
            stopOpacity: 0.61359572,
          }}
          offset={0}
          id="stop2"
        />
        <stop
          style={{
            stopColor: "#9811ac",
            stopOpacity: 0.89803219,
          }}
          offset={0.3625899}
          id="stop16"
        />
        <stop
          style={{
            stopColor: "#ba0f9b",
            stopOpacity: 0.52941173,
          }}
          offset={0.46618706}
          id="stop15"
        />
        <stop
          style={{
            stopColor: "#9811ac",
            stopOpacity: 0.69767439,
          }}
          offset={0.63884896}
          id="stop4"
        />
        <stop
          style={{
            stopColor: "#220b98",
            stopOpacity: 0.50447226,
          }}
          offset={1}
          id="stop3"
        />
      </linearGradient>
      <linearGradient
        xlinkHref="#linearGradient2"
        id="linearGradient3"
        x1={380.92252}
        y1={-132.2487}
        x2={380.92252}
        y2={470.77036}
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0.86137891,0,0,0.86137894,20.573335,72.945043)"
      />
      <radialGradient
        xlinkHref="#linearGradient4"
        id="radialGradient6"
        cx={362.95059}
        cy={123.6425}
        fx={362.95059}
        fy={123.6425}
        r={183.64184}
        gradientUnits="userSpaceOnUse"
      />
      <radialGradient
        xlinkHref="#linearGradient6"
        id="radialGradient8"
        cx={256}
        cy={256}
        fx={256}
        fy={256}
        r={246.67799}
        gradientUnits="userSpaceOnUse"
        spreadMethod="pad"
      />
    </defs>
    <g
      id="layer1"
    >
      <path
        style={{
          fill: "url(#radialGradient8)",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 138.707,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeOpacity: 1,
          paintOrder: "stroke markers fill",
        }}
        id="rect1"
        width={493.35599}
        height={493.35599}
        x={9.3220062}
        y={9.3220062}
        rx={0}
        ry={0}
        d="M 81.565231,9.3220062 H 430.43477 a 72.243225,72.243225 45 0 1 72.24322,72.2432248 l 0,348.869539 a 72.243225,72.243225 135 0 1 -72.24322,72.24322 l -348.869539,0 A 72.243225,72.243225 45 0 1 9.3220062,430.43477 V 81.565231 A 72.243225,72.243225 135 0 1 81.565231,9.3220062 Z"
      />
    </g>
    <g
      id="layer2"
    >
      <path
        style={{
          fill: "url(#radialGradient6)",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 96,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          paintOrder: "stroke markers fill",
          opacity: 1,
        }}
        id="path2"
        d="M 359.20793,111.22544 546.59243,75.299094 375.36765,119.89984 411.294,307.28434 366.69326,136.05956 179.30875,171.98591 350.53353,127.38517 314.60718,-59.999339 Z"
        transform="matrix(1.3258699,0,0,1.3258699,-225.22527,92.066128)"
      />
      <text
        xmlSpace="preserve"
        style={{
          fontWeight: "bold",
          fontSize: "405.486px",
          lineHeight: "304.114px",
          fontFamily: "'Snell Roundhand'",
          textAlign: "start",
          direction: "ltr",
          textAnchor: "start",
          display: "inline",
          opacity: 1,
          mixBlendMode: "normal",
          fill: "url(#linearGradient3)",
          stroke: "none",
          strokeWidth: 304.114,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          paintOrder: "stroke markers fill",
        }}
        x={70.731934}
        y={354.78296}
        id="text1"
        transform="scale(0.76792181,1.3022159)"
      >
        <tspan
          id="tspan1"
          x={70.731934}
          y={354.78296}
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "normal",
            fontStretch: "normal",
            fontFamily: "Geneva",
            fill: "url(#linearGradient3)",
            fillOpacity: 1,
            strokeWidth: 304.114,
          }}
        >
          {"42"}
        </tspan>
      </text>
    </g>
  </svg>
);
export default IcoEngine;
