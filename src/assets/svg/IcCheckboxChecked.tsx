import type { SVGProps } from 'react';
const SvgIcCheckboxChecked = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props}>
    <path
      fill="#2F53C4"
      stroke="#2F53C4"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5 3.75h14c.69 0 1.25.56 1.25 1.25v14c0 .69-.56 1.25-1.25 1.25H5c-.69 0-1.25-.56-1.25-1.25V5c0-.69.56-1.25 1.25-1.25"
    />
    <path
      stroke="#E3E4E5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.7}
      d="M7 13.2 9.857 16 17 9"
    />
  </svg>
);
export default SvgIcCheckboxChecked;
