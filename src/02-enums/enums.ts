// enum 可以省略常量的值，默认从0开始递增
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

Direction.Up === 0; // True
Direction.Down === 1; // True
Direction.Left === 2; // True
Direction.Right === 3; // True

// 也可以自己指定常量的值，值的类型还可以是 string 类型
// 开发中把一类常量定义到一个地方是比较好的实践
enum OrderStatus {
  NotPaid = "NotPaid",
  Paid = "Paid",
  WaitResult = "WaitResult",
  Finished = "Finished",
}
// 还可以统一定义枚举常量对应的名称
const OrderStatusNameMap = new Map([
  [OrderStatus.NotPaid, "未支付"],
  [OrderStatus.Paid, "已支付"],
  [OrderStatus.WaitResult, "订单生成中"],
  [OrderStatus.Finished, "已完成"],
]);
// 或者这样定义枚举常量对应的名称
const OrderStatusNameMap2: Record<OrderStatus, string> = {
  [OrderStatus.NotPaid]: "未支付",
  [OrderStatus.Paid]: "已支付",
  [OrderStatus.WaitResult]: "订单生成中",
  [OrderStatus.Finished]: "已完成",
};

// 之后可能通过枚举类型来限制常量值的范围
// 可以通过枚举来使用对应的常量值
function onOrderStatusChange(status: OrderStatus) {
  if (status === OrderStatus.NotPaid) {
    return;
  }
  // ...
}
// 在其他地方可以通过常量得到名称
OrderStatusNameMap.get(OrderStatus.NotPaid);
OrderStatusNameMap2[OrderStatus.Finished];
