"use client";
import ScrollToTop from "react-scroll-to-top";

const BackToTop = () => {
  return (
    <ScrollToTop
      smooth
      className='!bg-[#e6e8ea] !h-20 !w-20 !rounded-full flex items-center justify-center back-to-top'
      svgPath='M4 5a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1zm15.708 10.708a1 1 0 0 1-1.414 0L13 10.414V21a1 1 0 1 1-2 0V10.414l-5.294 5.294a1 1 0 0 1-1.414-1.414L11.286 7.3l.003-.003a.997.997 0 0 1 1.421-.001l.004.004 6.994 6.994a1 1 0 0 1 0 1.414z'
      viewBox='0 0 24 24'
      color='#00000'
      height='38px'
      width='38px'
    />
  );
};

export default BackToTop;
