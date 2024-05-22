const BREAKPOINTS = {
  xs: 480,
  sm: 576,
  md: 720,
  lg: 960,
  xl: 1200,
  xxl: 1600,
  x100: 1450
};

function appendPxToValues(obj) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        obj[key] = obj[key] + 'px';
      }
    }
  }
  
appendPxToValues(BREAKPOINTS);
  

export default BREAKPOINTS;
