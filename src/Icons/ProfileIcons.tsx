import React from "react";

import { SvgXml } from "react-native-svg";

const MoreIconXml = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_1274)">
<path d="M22 16C22 17.1046 22.8954 18 24 18C25.1046 18 26 17.1046 26 16C26 14.8954 25.1046 14 24 14C22.8954 14 22 14.8954 22 16Z" fill="#0D253C"/>
<path d="M14 16C14 17.1046 14.8954 18 16 18C17.1046 18 18 17.1046 18 16C18 14.8954 17.1046 14 16 14C14.8954 14 14 14.8954 14 16Z" fill="#0D253C"/>
<path d="M6 16C6 17.1046 6.89543 18 8 18C9.10457 18 10 17.1046 10 16C10 14.8954 9.10457 14 8 14C6.89543 14 6 14.8954 6 16Z" fill="#0D253C"/>
</g>
<defs>
<clipPath id="clip0_1_1274">
<rect width="32" height="32" fill="white" transform="translate(32) rotate(90)"/>
</clipPath>
</defs>
</svg>
`;
export const MoreIcon = () => <SvgXml xml={MoreIconXml} />;

const LeftIconXml = `<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.89584 11.2514L17.6458 11.2514" stroke="#181D27" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.4415 16.7738L3.89566 11.2518L9.4415 5.72888" stroke="#181D27" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

export const LeftIcon = () => <SvgXml xml={LeftIconXml} />;
