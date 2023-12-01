interface svgProps {
  className?: string;
}

export default function MagnifyingGlass({ className }: svgProps) {
  return (
    <svg
      viewBox="-0.5 -0.5 14 14"
      xmlns="http://www.w3.org/2000/svg"
      height="14"
      width="14"
      className={className}
    >
      <path
        d="M0.7973577766916669 7.235025619791667A4.909125000000001 4.909125000000001 0 1 0 9.833429793958336 3.3947866219583336a4.909125000000001 4.909125000000001 0 1 0 -9.036072017266669 3.840238997833334Z"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      ></path>
      <path
        d="m8.786375000000001 8.785833333333334 3.8073750000000004 3.8079166666666673"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      ></path>
    </svg>
  );
}
