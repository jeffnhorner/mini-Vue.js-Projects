<template>
  <div class="test">
    <input type="text" v-model="title"><br />
    <h1>{{ title }}</h1>
    <p v-if="showName">Welcome {{ user.firstName }} {{ user.lastName }}</p>
    <p v-else>Welcome nobody...</p>
    <ul>
      <li v-for="item in items" :key="item.index">{{ item.title }}</li>
    </ul>
    <button @click="greet('Hello World')">Say Greeting</button>
    <input type="text" @keyup="pressKey" @keyup.enter="enterKey">
    <hr />
    <label>First name: </label><input type="test" v-model="user.firstName">
    <br />
    <label>Last name: </label><input type="test" v-model="user.lastName">
    <h3>{{ fullName }}</h3>
    <h3>{{ msg }}</h3>
  </div>
</template>

<script>
import App from '../App';

  export default {
    name: 'Test',
    props: {
      msg: {
        type: String,
        default: 'Foobar'
      }
    },
    data() {
      return {
        title: 'This is my first Vue project from cli',
        user: {
          firstName: 'Jeff',
          lastName: 'Horner'
        },
        showName: true,
        items: [
          {
            index: 1,
            title: 'Item One'
          },
          {
            index: 2,
            title: 'Item Two'
          },
          {
            index: 3,
            title: 'Item Three'
          }
        ]
      }
    },
    methods: {
      greet: function(greeting) {
        alert(greeting);
      },
      pressKey: function(e) {
        console.log(e.target.value);
      },
      enterKey: function() {
        console.log('you hit enter')
      }
    },
    computed: {
      fullName: function() {
        return this.user.firstName + ' ' + this.user.lastName;
      }
    }
  }
</script>

<style scoped>
  .test {
    font-size: 2rem;
  }
</style>
