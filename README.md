I don't see tree-shaking happening with this setup.

For example, I don't think any of `{ Either, left, right, match }` require `hash`.

Interestingly, `./dist/webpack/{effect,either}.js` do not work when `optimization.minimize` is set to `true`, whereas there is no problem with the rollup output.