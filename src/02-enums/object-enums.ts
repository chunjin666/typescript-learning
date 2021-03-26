// 使用对象实现的版本
const OrderStatus = {
  NotPaid: "NotPaid",
  Paid: "Paid",
  WaitResult: "WaitResult",
  Finished: "Finished",
} as const;

const OrderStatusNameMap: Record<keyof typeof OrderStatus, string> = {
  [OrderStatus.NotPaid]: "未支付",
  [OrderStatus.Paid]: "已支付",
  [OrderStatus.WaitResult]: "订单生成中",
  [OrderStatus.Finished]: "已完成",
}

// 一样的效果，只是要麻烦点
console.log(OrderStatusNameMap[OrderStatus.Finished])


export default 0;