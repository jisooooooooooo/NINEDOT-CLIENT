import type { SVGProps } from 'react';
const SvgIcRadioChecked = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" {...props}>
    <rect width={18.5} height={18.5} x={0.75} y={0.75} fill="#282C33" rx={9.25} />
    <rect
      width={18.5}
      height={18.5}
      x={0.75}
      y={0.75}
      stroke="#3E72F3"
      strokeWidth={1.5}
      rx={9.25}
    />
    <circle cx={10} cy={10} r={4} fill="#3E72F3" />
  </svg>
);
export default SvgIcRadioChecked;
