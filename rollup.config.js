import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy';
import svgr from '@svgr/rollup';

export default {
    input: 'src/index.ts', // Your entry file
    output: [
        {
            file: 'dist/index.cjs.js',
            format: 'cjs',
            sourcemap: true,
        },
        {
            file: 'dist/index.esm.js',
            format: 'esm',
            sourcemap: true,
        },
    ],
    plugins: [
        resolve(),
        commonjs(),
        svgr({
            icon: true,
            include: '**/*.svg',
            replaceAttrValues: { '#292D32': 'currentColor' },
            svgoConfig:{
                plugins: [
                    { name: 'removeAttrs', params: { attrs: '(stroke-width)' } },
                ],
            }
        }),
        typescript({
            tsconfig: './tsconfig.json',
            clean: true,
        }),
        terser(),
        // Copy your SVG assets to the dist folder
        copy({
            targets: [{ src: 'src/icons/**/*.svg', dest: 'dist/icons' }],
        }),
    ],
    external: ['react'], // Prevent bundling react
};
