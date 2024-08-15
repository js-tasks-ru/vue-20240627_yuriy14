import { defineComponent, createApp } from 'vue/dist/vue.esm-bundler.js'

const app = defineComponent({
  name: 'CreateApp',

  setup() {
    const dateString = new Date().toLocaleDateString(navigator.language, { dateStyle: 'long' })
    return {
      dateString
    }
  },

  template: `
    Сегодня {{ dateString }}
  `,
})

createApp(app).mount('#app')
