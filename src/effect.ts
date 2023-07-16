import { Effect, fail, succeed, runCallback } from '@effect/io/Effect';
import { isFailure } from '@effect/io/Exit';

export const divide = (a: number, b: number): Effect<never, Error, number> =>
    b === 0
        ? fail(new Error("Can't divide by zero"))
        : succeed(a / b);

runCallback(divide(2, 5), exit => {
    isFailure(exit)
    ? console.error(exit.cause)
    : console.log(exit.value)
})