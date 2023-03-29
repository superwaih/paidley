export function PhysicalCard() {
  return (
    <svg
      width="260"
      height="342"
      viewBox="0 0 260 342"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_bd_868_10625)">
        <rect
          x="-4.82825"
          y="291.573"
          width="306"
          height="192"
          rx="22"
          transform="rotate(-75 -4.82825 291.573)"
          fill="url(#paint0_linear_868_10625)"
          shape-rendering="crispEdges"
        />
        <rect
          x="-4.03216"
          y="291.114"
          width="304.7"
          height="190.7"
          rx="21.35"
          transform="rotate(-75 -4.03216 291.114)"
          stroke="url(#paint1_linear_868_10625)"
          stroke-opacity="0.63"
          stroke-width="1.3"
          shape-rendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_bd_868_10625"
          x="-9.88928"
          y="-9.06152"
          width="299.778"
          height="378.389"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="5" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_868_10625"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="5"
            operator="erode"
            in="SourceAlpha"
            result="effect2_dropShadow_868_10625"
          />
          <feOffset dx="21" dy="19" />
          <feGaussianBlur stdDeviation="9.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_backgroundBlur_868_10625"
            result="effect2_dropShadow_868_10625"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_868_10625"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_868_10625"
          x1="-117.593"
          y1="132.34"
          x2="374.666"
          y2="493.525"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" stop-opacity="0.39" />
          <stop offset="0.674014" stop-color="white" stop-opacity="0" />
          <stop offset="0.893994" stop-color="#C4C4C4" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_868_10625"
          x1="500.172"
          y1="524.573"
          x2="13.9126"
          y2="629.752"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.633333" stop-color="#EAF0F6" stop-opacity="0.08" />
          <stop offset="0.773958" stop-color="#EAF0F6" stop-opacity="0.08" />
        </linearGradient>
      </defs>
    </svg>
  );
}
