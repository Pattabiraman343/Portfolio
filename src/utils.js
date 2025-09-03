// src/utils.js
const utils = {
    device: {
      isTouch: () => "ontouchstart" in window || navigator.maxTouchPoints > 0,
    },
    math: {
      clamp: (val, min, max) => Math.min(Math.max(val, min), max),
      interpolateRange: (val, min1, max1, min2, max2) =>
        ((val - min1) / (max1 - min1)) * (max2 - min2) + min2,
    },
    // other helpers...
  };
  
  export default utils;
  