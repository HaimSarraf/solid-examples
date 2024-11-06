export type AreaCalculaor = {
  SquareArea: (num: number) => number;
  RectangleArea: (num1: number, num2: number) => number;
};

export const AreaOfRectangleCalculator: AreaCalculaor["RectangleArea"] = (
  width: number,
  height: number
) => {
  const area: number = width * height;
  return area;
};

export const AreaOfSqureCalculaor: AreaCalculaor["SquareArea"] = (
  side: number
) => {
  const area: number = side * side;
  return area;
};
