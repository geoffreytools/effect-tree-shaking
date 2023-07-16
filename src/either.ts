import { Either, left, right, match } from '@effect/data/Either';

export const divide = (a: number, b: number): Either<Error, number> =>
    b === 0
        ? left(new Error("Can't divide by zero"))
        : right(a / b);

match(divide(2, 5), {
    onLeft: console.error,
    onRight: console.log
});