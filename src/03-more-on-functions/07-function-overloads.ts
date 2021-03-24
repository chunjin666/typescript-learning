// 2种使用方式的函数声明，与函数实现的区别是不包含{}部分
function makeDate(timestamp: number): Date;
function makeDate(month: number, day: number, year: number): Date;
// 函数实现
function makeDate(monthOrTimestamp: number, day?: number, year?: number): Date {
  if (day !== undefined && year !== undefined) {
    return new Date(year, monthOrTimestamp, day);
  } else {
    return new Date(monthOrTimestamp);
  }
}
// 函数使用
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
const d3 = makeDate(1, 3); // Error
