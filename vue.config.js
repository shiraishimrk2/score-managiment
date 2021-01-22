module.exports = {
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
            "**/*"
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