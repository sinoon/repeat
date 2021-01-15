const { createFarrowConfig } = require('farrow')

module.exports = createFarrowConfig({
    server: {
        entry: 'index.ts',
        src: 'src',
        dist: 'dist',

        // uncomment next-line to debug
        // nodeArgs: ['--inspect-brk'],
        esbuild: {
            // target: ['node10'],
            // bundle: false,
            target: ['node10.4'],
            // format: 'cjs',
            // external: [...Object.keys(pkg.dependencies)],
        },
    },
})
