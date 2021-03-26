// 在JS中使用对象实现的版本
const OrderStatus = {
  NotPaid: "NotPaid",
  Paid: "Paid",
  WaitResult: "WaitResult",
  Finished: "Finished",
};

/**
 * @type {Record<keyof OrderStatus, string>}
 */
const OrderStatusNameMap = {
  [OrderStatus.NotPaid]: "未支付",
  [OrderStatus.Paid]: "已支付",
  [OrderStatus.WaitResult]: "订单生成中",
  [OrderStatus.Finished]: "已完成",
}

console.log(OrderStatusNameMap[OrderStatus.Finished])
// 输入字符串会有提示！！
console.log(OrderStatusNameMap['Finished'])
