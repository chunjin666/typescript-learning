interface Shape {
  kind: "circle" | "square";
  radius?: number;
  sideLength?: number;
}

function handleShape(shape: Shape) {
  // oops!
  if (shape.kind === "rect") {
    // 这是个不可能进入的分支
  }
}

function getArea(shape: Shape) {
  return Math.PI * shape.radius ** 2;
  // 发现 shape.radius可能为undefined
}

function getArea2(shape: Shape) {
  if (shape.kind === "circle") {
    // 使用非空断言
    return Math.PI * shape.radius! ** 2;
  }
}
