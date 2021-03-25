class BeeKeeper {
  hasMask: boolean = false;
}

class ZooKeeper {
  nametag: string = '';
}

class Animal {
  numLegs: number = 0;
}

class Bee extends Animal {
  keeper: BeeKeeper = new BeeKeeper();
}

class Lion extends Animal {
  keeper: ZooKeeper = new ZooKeeper();
}

// 约束了参数c是一个类的构造函数，且这个类继承自Animal，且函数返回值是Animal或者Animal的子类的实例
function createInstance<A extends Animal>(c: new () => A): A {
  return new c();
}

createInstance(Lion).keeper.nametag;
createInstance(Bee).keeper.hasMask;