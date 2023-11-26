export default function CancelButton({ className }: { className: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="42"
      height="42"
      viewBox="0 0 42 42"
      fill="none"
      className={className}
    >
      <g filter="url(#filter0_d_33_168)">
        <circle cx="21" cy="17" r="11" fill="white" />
      </g>
      <g clipPath="url(#clip0_33_168)">
        <path
          d="M21.0863 15.3187L19.6132 13.8455C19.535 13.7674 19.4291 13.7235 19.3186 13.7235C19.208 13.7235 19.1021 13.7674 19.0239 13.8455L17.8454 15.024C17.7673 15.1022 17.7234 15.2082 17.7234 15.3187C17.7234 15.4292 17.7673 15.5351 17.8454 15.6133L19.3186 17.0864L17.8454 18.5596C17.7673 18.6377 17.7234 18.7437 17.7234 18.8542C17.7234 18.9647 17.7673 19.0707 17.8454 19.1488L19.0239 20.3273C19.1021 20.4055 19.208 20.4494 19.3186 20.4494C19.4291 20.4494 19.535 20.4055 19.6132 20.3273L21.0863 18.8542L22.5595 20.3273C22.6376 20.4055 22.7436 20.4494 22.8541 20.4494C22.9646 20.4494 23.0706 20.4055 23.1487 20.3273L24.3272 19.1488C24.4054 19.0707 24.4493 18.9647 24.4493 18.8542C24.4493 18.7437 24.4054 18.6377 24.3272 18.5596L22.8541 17.0864L24.3272 15.6133C24.4054 15.5351 24.4493 15.4292 24.4493 15.3187C24.4493 15.2082 24.4054 15.1022 24.3272 15.024L23.1487 13.8455C23.0706 13.7674 22.9646 13.7235 22.8541 13.7235C22.7436 13.7235 22.6376 13.7674 22.5595 13.8455L21.0863 15.3187Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_33_168"
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
            result="effect1_dropShadow_33_168"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_33_168"
            result="shape"
          />
        </filter>
        <clipPath id="clip0_33_168">
          <rect
            width="10"
            height="10"
            fill="white"
            transform="translate(13.929 17) rotate(-45)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
