interface svgProps {
  className?: string;
}

export default function Logo({ className }: svgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="-0.705 -0.705 22 22"
      height="22"
      width="22"
      className={className}
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m10.301005416666666 18.25131916666667 -8.091775629166666 -7.32952525C-2.1884853625000003 6.524087345833333 4.2761569375 -1.9195284874999998 10.301005416666666 4.9115900749999994c6.024891375 -6.8311185624999995 12.460210083333333 1.6418122833333333 8.091784208333333 6.010203841666667L10.301005416666666 18.25131916666667Z"
        stroke-width="2.3"
      ></path>
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M4.719382425 9.827435416666667h2.710459020833333l1.6262410958333333 -2.1683929541666664 2.168384375 3.7946597875 1.6262668333333332 -2.168384375h3.0194377083333332"
        stroke-width="2.3"
      ></path>
    </svg>
  );
}
