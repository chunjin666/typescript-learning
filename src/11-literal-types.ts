// method参数即为字面类型
function handleRequest(url: string, method: "GET" | "POST" | "PUT" | "DELETE") {
  // ...
}

const req = { url: "https://example.com", method: "GET" };
// mdthod参数会报错 Argument of type 'string' is not assignable to parameter of type '"GET" | "POST" | "PUT" | "DELETE"'
handleRequest(req.url, req.method);

// 比较LOW的解决办法
handleRequest(req.url, req.method as "GET");

// as const 作用于类型系统，使所有的属性变为 Literal Type 而不是普通的 number 或者 stirng.
const req2 = { url: "https://example.com", method: "GET" } as const;
handleRequest(req2.url, req2.method);
