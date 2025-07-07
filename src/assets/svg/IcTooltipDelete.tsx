import type { SVGProps } from 'react';
const SvgIcTooltipDelete = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 21" {...props}>
    <path fill="#1B49D7" d="M0 .5h20v20H0z" />
    <path
      stroke="#E3E4E5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.7}
      d="m5 15.5 10-10m-10 0 10 10"
    />
  </svg>
);
export default SvgIcTooltipDelete;
