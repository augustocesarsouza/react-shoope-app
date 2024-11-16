interface SvgArrowBottomFlashSaleProps {
  RefSvgArrowBottom: React.MutableRefObject<SVGSVGElement | null>;
}

const SvgArrowBottomFlashSale = ({ RefSvgArrowBottom }: SvgArrowBottomFlashSaleProps) => {
  return (
    <svg
      enableBackground="new 0 0 15 15"
      viewBox="0 0 15 15"
      x="0"
      y="0"
      className="shopee-svg-icon icon-down-arrow-filled"
      ref={RefSvgArrowBottom}
    >
      <path d="m6.5 12.9-6-7.9s-1.4-1.5.5-1.5h13s1.8 0 .6 1.5l-6 7.9c-.1 0-.9 1.3-2.1 0z"></path>
    </svg>
  );
};

export default SvgArrowBottomFlashSale;
