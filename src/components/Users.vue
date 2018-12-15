<template>
  <div class="content">
    <h3>{{ title }}</h3>
    <form v-on:submit.prevent="addUser">
      <input type="text" v-model="newUser.name" placeholder="enter name...">
      <br />
      <input type="text" v-model="newUser.email" placeholder="enter email...">
      <br />
      <input type="submit" value="Add User">
    </form>
    <ul>
      <li class="fadeIn" v-for="user in users" v-bind:key="user.index">
        <input type="checkbox" class="toggle" v-model="user.contacted">
        <span :class="{ contacted: user.contacted }">
          {{ user.name }}: {{ user.email }} <button @click="deleteUser(user)">X</button>
        </span>
      </li>
    </ul>
    <p>Total time you've spent on this page (seconds): {{ count }}</p>
  </div>
</template>

<script>


  export default {
    name: 'Users',
    data() {
      return {
        title: 'User List',
        users: [],
        newUser: [],
        count: 0,
        subdomain: '',
        interval: null,
        timer: null
      }
    },
    methods: {
      addUser: function() {
        this.users.unshift({
          name: this.newUser.name,
          email: this.newUser.email,
          contacted: false
        });
      },
      handleInputUpdate: function(data) {
        console.log('input was updated', data)
      },
      deleteUser: function(user) {
        this.users.splice(this.users.indexOf(user), 1);
      }
    },
    created() {
      this.$http.get('https://jsonplaceholder.typicode.com/users') 
        .then(function(response, reject) {
          this.users = response.data;
        })
        .catch(function(err) {
          console.log('data not received')
        })
    },
    mounted() {
      this.timer = setInterval(() => {
        this.count += 1;
        console.log(this.count);
      }, 1000);
    },
    destroyed() {
      clearInterval(this.timer);
    }
  }
</script>

<style scoped>
  .contacted {
    text-decoration: line-through;
  }
  .content {
    animation: fadeIn 1.2s;
  }
  .fadeIn {
    animation: fadeIn .5s ease-in-out;
  }
</style>
