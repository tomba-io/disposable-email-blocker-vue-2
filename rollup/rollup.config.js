// @ts-ignore
import typescript from '@rollup/plugin-typescript';
import pkg from '../package.json';
import { terser } from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy';

const outputDir = './dist/';
const globalName = 'Disposable';
const banner = `/**
* ${pkg.name} version ${pkg.version}
* @license ${pkg.license}
* 
* @copyright ${pkg.author}
* @homepage ${pkg.homepage}
* @see README and LICENSE for details
*/`;

export default [
    {
        input: ['src/index.ts'],
        external: ['disposable-email-blocker'],
        output: [
            {
                file: outputDir + pkg.main,
                name: globalName,
                format: 'umd',
                sourcemap: false,
                banner: banner,
                globals: {
                    'disposable-email-blocker': 'disposableEmailBlocker'
                  }
            },
        ],
        plugins: [
            typescript(),
            terser(),
            copy({
                targets: [
                    {
                        src: 'README.md',
                        dest: 'dist',
                    },
                    {
                        src: 'LICENSE',
                        dest: 'dist',
                    },
                ],
            }),
        ],
    },
];
