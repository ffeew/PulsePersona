export default function MoreButton({ className }: { className: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="42"
      height="42"
      viewBox="0 0 42 42"
      fill="none"
      className={className}
    >
      <g filter="url(#filter0_d_33_167)">
        <circle cx="21" cy="17" r="11" fill="white" />
      </g>
      <path
        d="M20.1667 14.0833C20.1667 14.3043 20.2545 14.5163 20.4108 14.6726C20.567 14.8289 20.779 14.9167 21 14.9167C21.221 14.9167 21.433 14.8289 21.5893 14.6726C21.7456 14.5163 21.8334 14.3043 21.8334 14.0833C21.8334 13.8623 21.7456 13.6504 21.5893 13.4941C21.433 13.3378 21.221 13.25 21 13.25C20.779 13.25 20.567 13.3378 20.4108 13.4941C20.2545 13.6504 20.1667 13.8623 20.1667 14.0833Z"
        fill="currentColor"
      />
      <path
        d="M20.1667 16.9998C20.1667 17.2209 20.2545 17.4328 20.4108 17.5891C20.567 17.7454 20.779 17.8332 21 17.8332C21.221 17.8332 21.433 17.7454 21.5893 17.5891C21.7456 17.4328 21.8334 17.2209 21.8334 16.9998C21.8334 16.7788 21.7456 16.5669 21.5893 16.4106C21.433 16.2543 21.221 16.1665 21 16.1665C20.779 16.1665 20.567 16.2543 20.4108 16.4106C20.2545 16.5669 20.1667 16.7788 20.1667 16.9998Z"
        fill="currentColor"
      />
      <path
        d="M20.1667 19.9168C20.1667 20.1378 20.2545 20.3498 20.4108 20.5061C20.567 20.6624 20.779 20.7502 21 20.7502C21.221 20.7502 21.433 20.6624 21.5893 20.5061C21.7456 20.3498 21.8334 20.1378 21.8334 19.9168C21.8334 19.6958 21.7456 19.4839 21.5893 19.3276C21.433 19.1713 21.221 19.0835 21 19.0835C20.779 19.0835 20.567 19.1713 20.4108 19.3276C20.2545 19.4839 20.1667 19.6958 20.1667 19.9168Z"
        fill="currentColor"
      />
      <defs>
        <filter
          id="filter0_d_33_167"
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
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_33_167"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_33_167"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
