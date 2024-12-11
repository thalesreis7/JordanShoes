const size = {
    // TABLET
    gb: '1024px',
    ipadAir5: '820px',
    ipadMini: '768px',
    // SMARTPHONES
    md: '440px',
    sm: '390px'
}

const breakpoints = {
    gb: `(max-width: ${size.gb})`,
    ipadAir5: `(max-width: ${size.ipadAir5})`,
    ipadMini: `(max-width: ${size.ipadMini})`,
    md: `(max-width: ${size.md})`,
    sm: `(max-width: ${size.sm})`,
}

export default breakpoints;