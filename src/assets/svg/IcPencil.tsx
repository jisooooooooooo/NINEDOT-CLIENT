import type { SVGProps } from 'react';
const SvgIcPencil = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 40 40" {...props}>
    <path
      stroke="#E3E4E5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m25.387 8.72 5.892 5.893M27.888 6.22a4.167 4.167 0 1 1 5.892 5.893L10.833 35.059H5v-5.952z"
    />
  </svg>
);
export default SvgIcPencil;
