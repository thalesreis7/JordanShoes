// SPECIFIC SIZE RESOLUTION
const size = {
    // Tablets
    XL: '884px',
    MD: '840px',
    SM: '780px',
    // MOBILE
    Mxl: '440px',    
}

const breakpoints = {
    XL: `(max-width: ${size.XL})`,
    MD: `(max-width: ${size.MD})`,
    SM: `(max-width: ${size.SM})`,
    Mxl: `(max-width: ${size.Mxl})`,
}

export default breakpoints;