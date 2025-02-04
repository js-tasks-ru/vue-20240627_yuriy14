import { defineComponent } from 'vue'
import { getWeatherData, WeatherConditionIcons } from './weather.service.ts'

export default defineComponent({
  name: 'WeatherApp',
  setup() {
    const data = getWeatherData()
    const icons = WeatherConditionIcons
    function formattedWeather(kelvin) {
      return `${(kelvin - 273.15).toFixed(1)} °C`
    }
    function getIsNight({
        dt = '00:00',
        sunrise = '00:00',
        sunset = '00:00'
      } = {}
    ) {
      const dtTime = getTime(dt)
      const sunriseTime = getTime(sunrise)
      const sunsetTime = getTime(sunset)
      return dtTime > sunsetTime || dtTime < sunriseTime
    }
    function getTime(hhmm = '00:00') {
      const hhmmArr = hhmm.split(':')
      return (hhmmArr[0] ?? 0) + (hhmmArr[1] ?? 0) / 60
    }

    return {
      data,
      icons,
      formattedWeather,
      getIsNight,
    }
  },

  template: `
    <div>
      <h1 class="title">Погода в Средиземье</h1>

      <ul class="weather-list unstyled-list">
        <li :class="{'weather-card': true, 'weather-card--night':getIsNight(card.current)}" v-for="card of data">
          <div class="weather-alert" v-if="card.alert">
            <span class="weather-alert__icon">⚠️</span>
            <span class="weather-alert__description">{{card.alert.sender_name}}: {{card.alert.description}}</span>
          </div>
          <div>
            <h2 class="weather-card__name">
              {{card.geographic_name}}
            </h2>
            <div class="weather-card__time">
              {{ card.current.dt }}
            </div>
          </div>
          <div class="weather-conditions">
            <div class="weather-conditions__icon" :title="card.current.weather.description">{{ icons[card.current.weather.id] }}</div>
            <div class="weather-conditions__temp">{{ formattedWeather(card.current.temp) }}</div>
          </div>
          <div class="weather-details">
            <div class="weather-details__item">
              <div class="weather-details__item-label">Давление, мм рт. ст.</div>
              <div class="weather-details__item-value">{{ Math.round(card.current.pressure * 0.75) }}</div>
            </div>
            <div class="weather-details__item">
              <div class="weather-details__item-label">Влажность, %</div>
              <div class="weather-details__item-value">{{ card.current.humidity }}</div>
            </div>
            <div class="weather-details__item">
              <div class="weather-details__item-label">Облачность, %</div>
              <div class="weather-details__item-value">{{ card.current.clouds }}</div>
            </div>
            <div class="weather-details__item">
              <div class="weather-details__item-label">Ветер, м/с</div>
              <div class="weather-details__item-value">{{ card.current.wind_speed }}</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  `,
})
