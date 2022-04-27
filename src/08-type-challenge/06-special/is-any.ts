export type IsAny<T> = 'a' extends ('b' & T) ? true : false

type IsAnyResult = IsAny<any>
type IsAnyResult1 = IsAny<'a'>

type TestAny<T> =  T extends number ? 1 : 0
type R = TestAny<any>