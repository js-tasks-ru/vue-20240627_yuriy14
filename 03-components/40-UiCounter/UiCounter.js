import { defineComponent } from 'vue'
import { UiButton } from '@shgk/vue-course-ui'
import './UiCounter.css'

export default defineComponent({
  name: 'UiCounter',

  components: {
    UiButton,
  },

  props: {
    count: {
      type: Number,
      default: 0,
    },

    min: {
      type: Number,
      default: 0,
    },

    max: {
      type: Number,
      default: Infinity,
    },
  },

  emits: ['update:count'],

  setup(props, { emit }) {
    // Рекомендуется для практики реализовать обработку событий внутри setup, а не непосредственно в шаблоне
    const myEmit = (num) => {
      emit('update:count', props.count + num);
    }
    return {
      myEmit,
    }
  },

  template: `
    <div class="counter">
      <UiButton aria-label="Decrement" :disabled="count <= min" @click="myEmit(-1)">➖</UiButton>
      <span class="count" data-testid="count">{{ count }}</span>
      <UiButton aria-label="Increment" :disabled="count >= max" @click="myEmit(1)">➕</UiButton>
    </div>
  `,
})
