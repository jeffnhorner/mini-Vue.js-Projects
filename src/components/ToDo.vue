<template>
  <div class="content">
    <h2>{{ title }}:</h2>
    <form @submit.prevent="addItem">
      <input type="text" v-model="newList" placeholder="Enter your list items...">
      <button type="submit">Add Item</button>
    </form>
    <ul>
      <li class="fadeIn" v-for="item in list" :key="item.index">{{ item }}<button @click="deleteItem(item)">X</button></li>
    </ul>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        title: 'ToDo List',
        newList: [],
        list: []
      }
    },
    methods: {
      addItem: function () {
        this.list.unshift(this.newList);
        this.newList = '';
      },
      deleteItem: function(item) {
        this.list.splice(this.list.indexOf(item), 1)
      }
    },
    // json api used to show example list items
    // created: function() {
    //   this.$http.get('https://jsonplaceholder.typicode.com/todos')
    //     .then(function(response, reject) {
    //       // capping the sample data at 10
    //       for (let i = 0; i < 10; i++) {
    //         this.list.push(response.data[i].title);
    //       }
    //     })
    //     .catch(function(err) {
    //       alert('data was not received')
    //     })
    // }
  }
</script>

<style scoped>
  .content {
    animation: fadeIn 1.2s;
  }
  .fadeIn {
    animation: fadeIn .5s ease-in-out;
  }
</style>
