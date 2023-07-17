import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';

const config = (name) => ({
    input: `./src/${name}.ts`,
    output: {
        file: `./dist/rollup/${name}.js`,
        format: 'es',
    },
    plugins: [
        terser(),
        typescript({ include: [`src/**/*`] }),
        nodeResolve(),
    ]
})

export default ['effect', 'either'].map(config)