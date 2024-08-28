import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'UiClock',

  setup() {
    const date = ref(getDate())
    function getDate() {
      return new Intl.DateTimeFormat('ru', {
        timeStyle: 'medium',
      }).format(new Date())
    }

    return {
      date,
    }
  },

  template: `<div class="clock">{{ date }}</div>`,
})
