const context = require.context('.', true, /.vue/)
const components = {}

context.keys().forEach(contextKey => {
  const key = contextKey.match(/.+\/(.+)\.vue/)[1]
  components[key] = context(contextKey).default
})

export default {
  install (Vue) {
    Object.keys(components).forEach(key => {
      Vue.component(key, components[key])
    })
  }
}