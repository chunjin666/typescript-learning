export type BuildArray<Length extends number, Elm = unknown, Result extends unknown[] = []>
  = Result['length'] extends Length
    ? Result
    : BuildArray<Length, Elm, [...Result, Elm]>

type R = BuildArray<5>
