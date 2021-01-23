var path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        'tamesi':path.join(__dirname,'src','assets','song.json')
      }
    },
  },
  pluginOptions: {
    
    electronBuilder: {
      nodeIntegration: true,
      
      builderOptions: {
        asar: false,
        productName: "score-managiment",
        appId: "score-managiment",
        win: {
          icon: 'src/assets/app.ico',
          target: [
            {
              target: 'zip', // 'zip', 'nsis', 'portable'
              arch: ['x64'] // 'x64', 'ia32'
            }
          ]
        },
        files: [
          "**/*",
          "src/assets/song.json"
          // "src/assets/song.json"
          ],
          extraFiles: [
            {
              "from": "src/assets",
              "to": "assets",
              "filter": ["*.json"]
            }
          ]
      }
    }
  }
}