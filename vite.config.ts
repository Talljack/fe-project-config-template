import path from "path"
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import vueI18n from "@intlify/vite-plugin-vue-i18n"
import vueJsx from "@vitejs/plugin-vue-jsx"
import svgLoader from "vite-svg-loader"
import ViteComponents from "vite-plugin-components"
module.exports = defineConfig({
  resolve: {
    // 导入别名 和tsconfig.json需要同步
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },
  plugins: [
    vue(),
    vueJsx(),
    vueI18n({
      include: path.resolve(__dirname, "./src/assets/lang/**")
    }),
    svgLoader(),
    ViteComponents()
  ],
  esbuild: {
    jsxFactory: "h",
    jsxFragment: "Fragment"
  }
})
