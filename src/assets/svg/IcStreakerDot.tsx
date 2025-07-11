import type { SVGProps } from 'react';
const SvgIcStreakerDot = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 36 36" {...props}>
    <g filter="url(#ic_streaker_dot_svg__a)">
      <rect width={36} height={36} fill="url(#ic_streaker_dot_svg__b)" rx={18} />
      <foreignObject width={44} height={44} x={-4} y={-4}>
        <div
          style={{
            backdropFilter: 'blur(2px)',
            clipPath: 'url(#ic_streaker_dot_svg__c)',
            height: '100%',
            width: '100%',
          }}
        />
      </foreignObject>
      <rect
        width={36}
        height={36}
        fill="url(#ic_streaker_dot_svg__d)"
        fillOpacity={0.1}
        data-figma-bg-blur-radius={4}
        rx={18}
      />
    </g>
    <defs>
      <linearGradient
        id="ic_streaker_dot_svg__b"
        x1={18}
        x2={18}
        y1={0}
        y2={36}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3E72F3" />
        <stop offset={1} stopColor="#C3D9FF" />
      </linearGradient>
      <linearGradient
        id="ic_streaker_dot_svg__d"
        x1={18}
        x2={18}
        y1={0}
        y2={36}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#508FFF" />
        <stop offset={1} stopColor="#8AB4FF" />
      </linearGradient>
      <clipPath id="ic_streaker_dot_svg__c" transform="translate(4 4)">
        <rect width={36} height={36} rx={18} />
      </clipPath>
      <filter
        id="ic_streaker_dot_svg__a"
        width={45.6}
        height={45.6}
        x={-4.8}
        y={-4.8}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={-2.4} dy={2.4} />
        <feGaussianBlur stdDeviation={1.2} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0" />
        <feBlend in2="shape" result="effect1_innerShadow_1979_1516" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={2.4} dy={-2.4} />
        <feGaussianBlur stdDeviation={1.2} />
        <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
        <feColorMatrix values="0 0 0 0 0.582788 0 0 0 0 0.76 0 0 0 0 0.674348 0 0 0 0.1 0" />
        <feBlend in2="effect1_innerShadow_1979_1516" result="effect2_innerShadow_1979_1516" />
      </filter>
    </defs>
  </svg>
);
export default SvgIcStreakerDot;
