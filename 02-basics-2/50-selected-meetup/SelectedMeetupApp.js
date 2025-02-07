import { defineComponent, ref, watchEffect } from 'vue'
import { getMeetup } from './meetupsService.ts'

export default defineComponent({
  name: 'SelectedMeetupApp',

  setup() {
    const meetupId = ref(1)
    const meetup = ref({})
    watchEffect(async () => meetup.value = await getMeetup(meetupId.value))

    return {
      meetupId,
      meetup,
    }
  },

  template: `
    <div class="meetup-selector">
      <div class="meetup-selector__control">
        <button class="button button--secondary" type="button" @click="meetupId--" :disabled="meetupId == 1">Предыдущий</button>

        <div class="radio-group" role="radiogroup">
          <div class="radio-group__button" v-for="id in [1, 2, 3, 4, 5]" :key="id">
            <input
              :id="'meetup-id-' + id"
              class="radio-group__input"
              type="radio"
              name="meetupId"
              :value="id"
              :checked="meetupId == id"
              @click="meetupId = id"
            />
            <label :for="'meetup-id-' + id" class="radio-group__label">{{ id }}</label>
          </div>
        </div>

        <button class="button button--secondary" type="button" @click="meetupId++" :disabled="meetupId == 5">Следующий</button>
      </div>

      <div class="meetup-selector__cover">
        <div class="meetup-cover">
          <h1 class="meetup-cover__title">{{ meetup.title }}</h1>
        </div>
      </div>

    </div>
  `,
})
