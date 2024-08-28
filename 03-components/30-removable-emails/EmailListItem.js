import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EmailListItem',

  emits: [
    'removeEmail',
  ],

  props: {
    email: {
      type: String,
      required: true,
    },

    marked: {
      type: Boolean,
      default: false,
    },
  },

  template: `
    <li :class="{ marked }">
      {{ email }}
      <button type="button" aria-label="Удалить" @click.stop="$emit('removeEmail')">❌</button>
    </li>
  `,
})
