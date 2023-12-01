interface svgProps {
  className?: string;
}

export default function ChevronRight({ className }: svgProps) {
  return (
    <svg
      viewBox="-0.5 -0.5 14 14"
      xmlns="http://www.w3.org/2000/svg"
      height="14"
      width="14"
      className={className}
    >
      <path
        d="m2.979166666666667 0.40625000000000006 5.8066666666666675 5.8066666666666675a0.4057083333333334 0.4057083333333334 0 0 1 0 0.5741666666666668L2.979166666666667 12.593750000000002"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      ></path>
    </svg>
  );
}
