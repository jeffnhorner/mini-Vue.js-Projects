<template>
  <div class="weather content">
    <h2>Local Weather Data</h2>
    <p>Please enter your city and country below to see your current local weather:</p>

    <form @submit.prevent="getWeather">
      <input type="text" v-model="weather.city" placeholder="Enter City...">
      <input type="text" v-model="weather.country" placeholder="Enter Country...">
      <button type="submit">Get Weather</button>
    </form>

    <div class="weather">
      <p v-if="error">{{ weather.error }}</p>
      <p v-if="showLocation">{{ weatherInput }}</p>
      <p>{{ weather.temperature }}</p>
      <p>{{ weather.description }}</p>
      <p>{{ weather.wind }}</p>
    </div>

    <button v-if="reset" @click="resetWeather">Reset</button>
  </div>
</template>

<script>
  export default {
    name: 'Users',
    data() {
      return {
        error: false,
        reset: false,
        showLocation: false,
        weather: {
          city: '',
          country: '',
          error: 'Please enter a City and Country',
          description: null,
          temperature: null,
          wind: null,
        },
      }
    },
    methods: {
      getWeather: function() {
        const city = this.weather.city;
        const country = this.weather.country;
        const API_KEY = '8ddec521d125e33190069c4c5e381104';

        this.$http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`)
          .then(function(response, reject) {
            this.error = false;
            this.reset = true;
            this.showLocation = true;
            this.weather.city = response.data.name
            this.weather.country = response.data.sys.country
            this.weather.temperature = response.data.main.temp
            this.weather.description = response.data.weather[0].description
            this.weather.wind = response.data.wind.speed
          })
          .catch(function(err) {
            console.log('The data was not sucessfully received.');
            this.error = true;
            this.reset = false;
          })
      },
      resetWeather: function () {
        this.reset = false;
        this.showLocation = false;
        this.weather.city = '';
        this.weather.country = '';
        this.weather.description = null;
        this.weather.temperature = null;
        this.weather.wind = null;
      }
    },
    computed: {
      weatherInput: function() {
        return this.weather.city + ' ' + this.weather.country
      }
    }
  }
</script>

<style>
  .content {
    animation: fadeIn 1.2s;
  }
  .fadeIn {
    animation: fadeIn .5s ease-in-out;
  }
</style>
