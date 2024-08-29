import { defineComponent, ref, computed, onUnmounted } from 'vue'

export default defineComponent({
  name: 'UiClock',

  setup() {
    const date = ref(new Date())
    const formattedDate = computed(() => new Intl.DateTimeFormat(navigator.language, {
        timeStyle: 'medium',
      }).format(date.value)
    )
    let intervalId = setInterval(() => date.value = new Date(), 1000)
    onUnmounted(() => {
      clearInterval(intervalId)
      intervalId = null;
    })

    return {
      date,
      formattedDate,
    }
  },

  template: `<div class="clock">{{ formattedDate }}</div>`,
})
