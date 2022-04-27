type ParseSingleQuery<SingleQueryStr> = SingleQueryStr extends `${infer QueryKey}=${infer QueryVal}` ? { [k in QueryKey]: QueryVal } : {}

type MergeObj<Obj1, Obj2> = MergeObjInternal<Obj1, Obj2>

type MergeObjInternal<Obj1, Obj2, Key1 extends keyof Obj1 = keyof Obj1, Key2 extends keyof Obj2 = keyof Obj2> = {
  [Key in (Key1 | Key2)]: Key extends Key1
    ? Key extends Key2
      ? Obj1[Key1] | Obj2[Key2] 
      : Obj1[Key1]
    : Obj2[Key2]
}

type ParseQuery<QueryStr extends string> = QueryStr extends `${infer SingleQueryStr}&${infer RestQueryStr}`
  ? MergeObj<ParseSingleQuery<SingleQueryStr>, ParseQuery<RestQueryStr>>
  : ParseSingleQuery<QueryStr>

type result0 = ParseQuery<''>
type result2 = ParseQuery<'a=1&b=2'>
type result3 = ParseQuery<'a=1&b=2&c=3'>

type test = string & (number | string | boolean)