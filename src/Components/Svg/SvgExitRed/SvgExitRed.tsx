interface SvgExitRedProps {
  fill: string;
}

const SvgExitRed = ({ fill = '#EE4D2D' }: SvgExitRedProps) => {
  return (
    <svg
      width="6"
      height="6"
      viewBox="0 0 6 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="izn8vl oHnnYi"
    >
      <path
        d="M1.50391 0.716797L2.50977 2.46973L3.53516 0.716797H4.8291L3.22754 3.30957L4.89258 6H3.59863L2.52441 4.17383L1.4502 6H0.151367L1.81152 3.30957L0.214844 0.716797H1.50391Z"
        fill={fill}
      ></path>
    </svg>
  );
};

export default SvgExitRed;
