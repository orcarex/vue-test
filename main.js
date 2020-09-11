// IMPORTANT:
// - Must preface relative file paths with / or ./ etc
// - Must include the .js at end of the file name
// - Must surround named imports with { }

import Vue from './node_modules/vue'
import router from './router'
import VueI18n from './node_modules/vue-i18n'
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'tw', // 語言標識
  messages: {
    'tw': require('./lang/tw.js'),
    'en': require('./lang/en.js')
  }
})
// vue例項中引入
/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  template: '<Layout/>',
  components: {
    Layout
  },
})