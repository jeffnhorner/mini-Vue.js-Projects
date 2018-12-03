<template>
  <div class="content">
    <h2>{{ title }}:</h2>
    <p v-html="quotes.content"></p>
    <p>{{ quotes.author }}</p>
    <button @click.prevent="newQuote">New Quote</button>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        title: 'Quote Generator',
        quotes: {
          content: 'You are never too old to set another goal or to dream a new dream.',
          author: 'C.S. Lewis'
        }
      }
    },
    methods: {
      newQuote: function() {
        let rand = Math.floor(Math.random() * 40) + 1  
        this.$http.get('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=40')
          .then(function(response) {
            console.log(response)
            this.quotes.author = response.body[rand].title;
            this.quotes.content = response.body[rand].content;
          })
          .catch(function(err) {
            console.log('Data was not received');
          })
      }
    }
  }
</script>

<style scoped>
  .content {
    animation: fadeIn 1.2s;
  }
</style>


