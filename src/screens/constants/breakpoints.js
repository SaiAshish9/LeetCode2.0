const BREAKPOINTS = {
  xs: 480,
  sm: 576,
  md: 720,
  lg: 968,
  x125: 1150,
  xl: 1200,
  x110: 1300,
  x100: 1440,
  xxl: 1600,
  x175: 850,
  x200: 800,
  x75: 1920,
  x67: 2150,
  x50: 2880,
  x33: 4320,
  x25: 5760,
};

function appendPxToValues(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      obj[key] = obj[key] + "px";
    }
  }
}

appendPxToValues(BREAKPOINTS);

export default BREAKPOINTS;
