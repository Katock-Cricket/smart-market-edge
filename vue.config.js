const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
//     devServer: {
//     open: true,
//         host: 'localhost',
//         port: 8080,
//         proxy: {
//         "/auto-market-system": {
//             target: "http://localhost:8080/auto-market-system/",
//                 ws: true,
//                 changOrigin: true,
//                 pathRewrite: {
//                 "^/auto-market-system": ""
//             },
//         }
//     }
// }

})
