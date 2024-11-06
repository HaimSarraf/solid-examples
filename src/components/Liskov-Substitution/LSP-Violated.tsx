export const AreaCalculator = (width: number, height: number) => {
  const area: number = width * height;
  return area;
};

// as we learnt in math :) ,  all squares are rectangles with width=height so
// we can calculate square area just with one of width or height. but the
// SquareAreaCalculator needs 2 elements !
