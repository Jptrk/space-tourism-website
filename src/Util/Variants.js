export const inout = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
  out: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
};

export const slide = {
  initialNext: {
    opacity: 0,
    x: "10%",
    transition: { duration: 0.5 },
  },
  initialPrev: {
    opacity: 0,
    x: "-10%",
    transition: { duration: 0.5 },
  },
  animateNext: {
    opacity: 1,
    x: "0%",
    transition: { duration: 0.5 },
  },
  animatePrev: {
    opacity: 1,
    x: "0%",
    transition: { duration: 0.5 },
  },
  exitLeft: {
    opacity: 0,
    x: "-10%",
    transition: { duration: 0.5 },
  },
  exitRight: {
    opacity: 0,
    x: "10%",
    transition: { duration: 0.5 },
  },
};
