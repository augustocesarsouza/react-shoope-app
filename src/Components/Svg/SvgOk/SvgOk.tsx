interface SvgOkProps {
  colorSvg: string;
}

const SvgOk = ({ colorSvg }: SvgOkProps) => {
  return (
    <svg
      className="success-popup__icon"
      width="54"
      height="54"
      viewBox="0 0 54 54"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(1 1)" fill="none" fillRule="evenodd">
        <circle stroke={colorSvg} strokeWidth="2" cx="26" cy="26" r="26"></circle>
        <path
          d="M25.8 35.098l13.563-13.835c.91-.91.836-2.46-.165-3.46-1-1.002-2.55-1.076-3.46-.166L23.77 29.84l-7.51-6.763c-.91-.91-2.46-.836-3.46.165-1 1-1.075 2.55-.165 3.46l9.61 8.657c.91.91 2.46.835 3.46-.166.03-.03.062-.063.092-.096z"
          fill={colorSvg}
        ></path>
      </g>
    </svg>
  );
};

export default SvgOk;
