export const breakpoints = {
    xs:'0',
    sm:'576 px',
    md:'768 px',
    lg:'992 px',
    xl:'1200 px',
    xxl:'1400 px',
};

//Small devices (Landscape phones, 576px and up)
export const smallDevices = (styles: string) => `
@media screen and (min-width:${breakpoints.sm}px){
    ${styles}
}
`;
//Medium devices (tablets, 768px and up)
export const mediumDevices = (styles: string) => `
@media screen and (min-width:${breakpoints.md}px){
    ${styles}
}
`;
//Large devices (desktops, 992px and up)
export const largeDevices = (styles: string) => `
@media screen and (min-width:${breakpoints.lg}px){
    ${styles}
}
`;
//X-Large devices (large desktop, 1200px and up)
export const xLargeDevices = (styles: string) => `
@media screen and (min-width:${breakpoints.xl}px){
    ${styles}
}
`;
//XX-Large devices(larger desktop, 1400px and up)
export const xxLargeDevices = (styles: string) => `
@media screen and (min-width:${breakpoints.xxl}px){
    ${styles}
}
`;