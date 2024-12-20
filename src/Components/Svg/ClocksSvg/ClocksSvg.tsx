interface ClocksSvgProps {
  ColorSvgStroke: string;
}

const ClocksSvg = ({ ColorSvgStroke }: ClocksSvgProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 20 20" width="20">
      <g
        fill="none"
        fillRule="evenodd"
        stroke={ColorSvgStroke}
        strokeWidth="1.8"
        transform="translate(1 1)"
      >
        <circle cx="9" cy="9" r="9" />
        <path
          d="m11.5639648 5.05283203v4.71571528l-2.72832027 1.57129639"
          strokeLinecap="round"
          strokeLinejoin="round"
          transform="matrix(-1 0 0 1 20.39961 0)"
        />
      </g>
    </svg>
  );
};

export default ClocksSvg;
