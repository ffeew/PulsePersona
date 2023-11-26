export default function PauseButton({ className }: { className: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="42"
      height="42"
      viewBox="0 0 42 42"
      fill="none"
      className={className}
    >
      <g filter="url(#filter0_d_33_169)">
        <circle cx="21" cy="17" r="11" fill="white" />
      </g>
      <path
        d="M18.5 13.25H19.75C19.75 13.25 20.1666 13.25 20.1666 13.6667V20.3333C20.1666 20.3333 20.1666 20.75 19.75 20.75H18.5C18.5 20.75 18.0833 20.75 18.0833 20.3333V13.6667C18.0833 13.6667 18.0833 13.25 18.5 13.25Z"
        fill="currentColor"
      />
      <path
        d="M21.8334 13.25H23.0834C23.0834 13.25 23.5 13.25 23.5 13.6667V20.3333C23.5 20.3333 23.5 20.75 23.0834 20.75H21.8334C21.8334 20.75 21.4167 20.75 21.4167 20.3333V13.6667C21.4167 13.6667 21.4167 13.25 21.8334 13.25Z"
        fill="currentColor"
      />
      <defs>
        <filter
          id="filter0_d_33_169"
          x="0"
          y="0"
          width="42"
          height="42"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_33_169"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_33_169"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
