/** Lifted from https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/styled-components/index.d.ts */

import { TemplateExpression } from 'typescript';

export type FalseyValue = undefined | null | false;
export type Interpolation<P> = InterpolationValue | InterpolationFunction<P> | FlattenInterpolation<P>;
export type FlattenInterpolation<P> = ReadonlyArray<Interpolation<P>>;
export type InterpolationValue = string | number | FalseyValue
export type SimpleInterpolation = InterpolationValue | FlattenSimpleInterpolation;
export type FlattenSimpleInterpolation = ReadonlyArray<SimpleInterpolation>;
export type InterpolationFunction<P> = (props: P) => Interpolation<P>;

// export const css = <P extends object>(
//   first: TemplateStringsArray,
//   ...interpolations: Array<Interpolation<P>>
// ) => {
//   console.log(first, interpolations)
// }

export const css = <P extends Object>(
  func: (props: P) => string
) => {
  console.log(func({} as P))
  console.log(func.toString())
}