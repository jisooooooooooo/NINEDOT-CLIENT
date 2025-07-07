import type { SVGProps } from 'react';
const SvgIcDropdown = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m15.833 7.5-5.834 5.833L4.166 7.5"
    />
  </svg>
);
export default SvgIcDropdown;
