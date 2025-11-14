const pkg = require("./package.json")
const pluginNodeResolve = require("@rollup/plugin-node-resolve")

module.exports = {
    input: "./src/index.js",
    output: {
        name: 'browserjs',
        file: "./dist/browser.js",
        format: "umd",
        banner: `/*!
 * @oipage/browserjs v${pkg.version}
 * git+https://github.com/oi-contrib/oipage-browserjs.git
 */`
    },
    plugins: [pluginNodeResolve()]
}
