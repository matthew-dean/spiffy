/** Lifted from https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/styled-components/index.d.ts */

export type FalseyValue = undefined | null | false;
export type Interpolation<P> = InterpolationValue | InterpolationFunction<P> | FlattenInterpolation<P>;
export type FlattenInterpolation<P> = ReadonlyArray<Interpolation<P>>;
export type InterpolationValue = string | number | FalseyValue
export type SimpleInterpolation = InterpolationValue | FlattenSimpleInterpolation;
export type FlattenSimpleInterpolation = ReadonlyArray<SimpleInterpolation>;
export type InterpolationFunction<P> = (props: P) => Interpolation<P>;
type AnyIfEmpty<T extends object> = keyof T extends never ? ExtendObject<T> : T;
type ExtendObject<T = any> = T extends {} ? T : never;

export interface ThemeProps<T> {
  theme: T;
}

export type ThemedStyledProps<P, T> = P & ThemeProps<T>;


export interface BaseThemedCssFunction<T extends object> {
  (first: TemplateStringsArray, ...interpolations: SimpleInterpolation[]): FlattenSimpleInterpolation
  (
    first: TemplateStringsArray | InterpolationFunction<ThemedStyledProps<{}, T>>,
    ...interpolations: Array<Interpolation<ThemedStyledProps<{}, T>>>
  ): FlattenInterpolation<ThemedStyledProps<{}, T>>
}

export type ThemedCssFunction<T extends object> = BaseThemedCssFunction<AnyIfEmpty<T>>;


export const css = <T extends object = {}>(...args: Parameters<ThemedCssFunction<T>>): ReturnType<ThemedCssFunction<T>> => {
  const [strings, ...interpolations] = args
}