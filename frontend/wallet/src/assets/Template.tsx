interface svgProps {
  className?: string;
}

export default function Template({ className }: svgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      className={className}
    >
      <g clipPath="url(#clip0_29_1487)">
        <path
          d="M3.69537 4.53999V10.69H11.0754"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
