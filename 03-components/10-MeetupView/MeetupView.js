import { defineComponent } from 'vue'
import { UiAlert, UiContainer } from '@shgk/vue-course-ui'
import MeetupAgenda from './MeetupAgenda.js'
import MeetupDescription from './MeetupDescription.js'
import MeetupCover from './MeetupCover.js'
import MeetupInfo from './MeetupInfo.js'
import './MeetupView.css'

export default defineComponent({
  name: 'MeetupView',
  props: {
    meetup: {
      type: Object,
      required: true,
    }
  },

  components: {
    UiAlert,
    UiContainer,
    MeetupInfo,
    MeetupAgenda,
    MeetupDescription,
    MeetupCover,
  },

  template: `
    <div>

      <!-- Обложка митапа -->

      <UiContainer>
        <div class="meetup">
          <div class="meetup__content">
            <h2>Описание</h2>
            <MeetupInfo :organizer="meetup.organizer" :place="meetup.place" :date="meetup.date"/>
            <MeetupAgenda />
            <MeetupDescription />
            <MeetupCover />

            <!-- Описание митапа -->

            <h2>Программа</h2>

            <!-- Программа митапа -->
            <!-- Или при пустой программе - сообщение "Программа пока пуста..." в UiAlert -->
            <UiAlert></UiAlert>

          </div>
          <div class="meetup__aside">

            <!-- Краткая информация о митапе -->

            <div class="meetup__aside-buttons"></div>
          </div>
        </div>
      </UiContainer>
    </div>
  `,
})
