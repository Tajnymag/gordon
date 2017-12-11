export const Y = f => (x => x(x))(x => f(y => x(x)(y)));
export const fac = f => (n => ((n === 0) ? 1 : n * f(n - 1)));
