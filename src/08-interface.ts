// 接口定义
interface Point2D {
  x: number;
  y: number;
}
// 接口继承
interface Point3D extends Point2D {
  z: number;
  printCoord(): void;
}

// 作为变量类型
const p3d: Point3D = {
  x: 2,
  y: 2,
  z: 3,
  printCoord() {
    console.log(`x: ${this.x}, y: ${this.y}, z: ${this.z}`);
  },
};
p3d.printCoord();

// 作为参数类型
function distance2D(p1: Point2D, p2: Point2D): number {
  return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
}
distance2D({ x: 1, y: 1 }, { x: 2, y: 2 });

// 类实现接口，类名可以和接口名相同
class Point2D implements Point2D {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

class Point2DD implements Point2D {
  // 构造函数另外一种简写，和上面一样的效果
  constructor(public x: number, public y: number) {}
}
