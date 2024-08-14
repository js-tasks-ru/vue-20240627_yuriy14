import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
  name: 'CalculatorApp',

  setup() {
    const first = ref(0)
    const second = ref(0)
    const picked = ref("sum")
    const result = ref(0)
    watch([first, second, picked], () => {
      switch (picked.value) {
        case 'sum':
          result.value = first.value + second.value
          break
        case 'subtract':
          result.value = first.value - second.value
          break
        case 'multiply':
          result.value = first.value * second.value
          break
        case 'divide':
          result.value = second.value ? (first.value / second.value) : 0
          break
      }
    })

    return {
      first,
      second,
      picked,
      result,
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
