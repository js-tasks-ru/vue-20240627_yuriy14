import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  name: 'CalculatorApp',

  setup() {
    const first = ref(0)
    const second = ref(0)
    const picked = ref("sum")

    const result = computed(() => {
      switch (picked.value) {
        case 'sum':
          return first.value + second.value
        case 'subtract':
          return first.value - second.value
        case 'multiply':
          return first.value * second.value
        case 'divide':
          return second.value ? (first.value / second.value) : 0
        default:
          return 0
      }
    })

    return {
      first,
      second,
      picked,
      result
    }
  },

  template: `
    <div class="calculator">
      <input type="number" v-model="first" aria-label="First operand" />

      <div class="calculator__operators">
        <label><input type="radio" name="operator" value="sum" v-model="picked"/>➕</label>
        <label><input type="radio" name="operator" value="subtract" v-model="picked"/>➖</label>
        <label><input type="radio" name="operator" value="multiply" v-model="picked"/>✖</label>
        <label><input type="radio" name="operator" value="divide" v-model="picked"/>➗</label>
      </div>

      <input type="number" v-model="second" aria-label="Second operand" />

      <div>=</div>

      <output>{{ result }}</output>
    </div>
  `,
})
