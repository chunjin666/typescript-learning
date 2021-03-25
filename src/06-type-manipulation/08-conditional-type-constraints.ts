// 我们想要获取一个类型 "message" 属性的类型
type MessageOf<T> = T["message"];
//                  ^ Type '"message"' cannot be used to index type 'T'

function scope1() {
  // 通过 extends 约束泛型 T 的类型
  type MessageOf<T extends { message: unknown }> = T["message"];
  
  interface Email {
    message: string;
  }
  
  interface Dog {
    bark(): void;
  }
  
  type EmailMessageContents = MessageOf<Email>;
  //   ^ = type EmailMessageContents = string

  // 不符合泛型约束的类型会报错
  type DogMessageContents = MessageOf<Dog>;
  //                                  ^ Error
}


function scope2 () {
  // 但是，如果我们想让 MessageOf 接受任何类型，如果消息属性不可用，则默认为never，怎么办？
  // 我们可以通过将约束移出并引入条件类型来实现这一点：
  type MessageOf<T> = T extends { message: unknown } ? T["message"] : never;
  
  interface Email {
    message: string;
  }
  
  interface Dog {
    bark(): void;
  }
  
  type EmailMessageContents = MessageOf<Email>;
  //   ^ = type EmailMessageContents = string
  
  type DogMessageContents = MessageOf<Dog>;
  //   ^ = type DogMessageContents = never
}

// -------------------------------------------------------
// 这个例子我们使用索引获取的方式从类型数组中获取到了对应的类型
type Flatten<T> = T extends any[] ? T[number] : T;

// Extracts out the element type.
type Str = Flatten<string[]>;
//   ^ = type Str = string

// Leaves the type alone.
type Num = Flatten<number>;
//   ^ = type Num = number