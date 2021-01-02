module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        productName: "score-managiment",
        appId: "score-managiment",
        win: {
          icon: 'src/assets/logo.png',
          target: [
            {
              target: 'zip', // 'zip', 'nsis', 'portable'
              arch: ['x64'] // 'x64', 'ia32'
            }
          ]
        }
      }
    }
  }
}