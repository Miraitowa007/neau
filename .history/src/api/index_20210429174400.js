import * as api_product from './productList'
import * as api_news from './newsList'

const apiObj = {
  api_product,
  api_news
}

const install = function (Vue) {
  if (install.installed) return
  install.installed = true

  //定义属性到Vue原型中
  Object.defineProperties(Vue.prototype, {
    $fetch: {
      get() {
        return apiObj
      }
    }
  })
}

export default {
  install
}
