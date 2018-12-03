<template>
  <div id="app" class="content">
    <h1>{{ title }}</h1>
  </div>
</template>



<script>
  export default {
    name: 'App',
    data() {
      return {
        title: 'Vue',
        testInput: ''
      }
    },
    beforeUpdate: function() {
      console.log('beforeUpdate in app')
    },
    updated: function() {
      console.log('update in app')
    },

    computed: {
      updateTestInput: function() {
        this.$emit('update', this.testInput);
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  ul {
    list-style-type: none;
  }
</style>
