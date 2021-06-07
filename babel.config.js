module.exports = {
  presets: [
    "@vue/cli-plugin-babel/preset",
    "@babel/preset-env",
    "@babel/preset-typescript"
  ],
  plugins: [
    // jsx
    "@vue/babel-plugin-jsx",
    // dynamic-import
    "@babel/plugin-syntax-dynamic-import",
    // （??操作符
    "@babel/plugin-proposal-nullish-coalescing-operator",
    // （?.操作符
    "@babel/plugin-proposal-optional-chaining"
  ]
}