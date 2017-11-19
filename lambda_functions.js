exports.Y = f => (x => x(x))(x => f(y => x(x)(y)));
exports.fac = f => (n => ((n === 0) ? 1 : n * f(n - 1)));
