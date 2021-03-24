function scope1() {
  // unknown可以被任意类型赋值
  let value: unknown;

  value = true; // OK
  value = 42; // OK
  value = "Hello World"; // OK
  value = []; // OK
  value = {}; // OK
  value = Math.random; // OK
  value = null; // OK
  value = undefined; // OK
  value = new TypeError(); // OK
  value = Symbol("type"); // OK
}

function scope2() {
  // unknown 只能被自身和 any类型赋值
  let value: unknown;

  let value1: unknown = value; // OK
  let value2: any = value; // OK
  let value3: boolean = value; // Error
  let value4: number = value; // Error
  let value5: string = value; // Error
  let value6: object = value; // Error
  let value7: any[] = value; // Error
  let value8: Function = value; // Error
}

// 使用 `typeof` `instanceof` 缩小类型范围
function stringifyForLogging(value: unknown): string {
  if (typeof value === "function") {
    // `value`的类型被缩小为 `Function`
    const functionName = value.name || "(anonymous)";
    return `[function ${functionName}]`;
  }

  if (value instanceof Date) {
    // `value`的类型被缩小为 `Date`
    return value.toISOString();
  }

  return String(value);
}

/**
 * 自定义类型保护函数缩小 `unknown` 范围
 * 定义了 `value` 是一个公包含 `number` 的数组
 * 关键在于返回值类型 value is number[]
 */
function isNumberArray(value: unknown): value is number[] {
  return (
    Array.isArray(value) &&
    value.every((element) => typeof element === "number")
  );
}

const unknownValue: unknown = [15, 23, 8, 4, 42, 16];

if (isNumberArray(unknownValue)) {
  // 这里就可以把 `unknownValue` 当成 `number[]`
  const max = Math.max(...unknownValue);
  console.log(max);
}

//-------------------------never-----------------------
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
  return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
  while (true) {}
}

// 无法推测的变量类型
const handleStringOrNumber = function (value: string | number) {
  if (typeof value === "string") {
    // 我是string
    value.substr(0, value.length);
  } else if (typeof value === "number") {
    // 我是number
    value.toFixed(2)
  } else {
    // 我是谁？我在哪？？？
    // value 是一个 never类型
    value
  }
};
