<template>
  <div class="color-container">
    <div @click="guess(colorCards[0])" class="color-card"></div>
    <div @click="guess(colorCards[1])" class="color-card"></div>
    <div @click="guess(colorCards[2])" class="color-card"></div>
    <div @click="guess(colorCards[3])" class="color-card"></div>
    <div @click="guess(colorCards[4])" class="color-card"></div>
    <div @click="guess(colorCards[5])" class="color-card"></div>
    
  </div>
</template>

<script>
export default {
  name: 'ColorCard',
  // passing colorCard & colorArr props from the parent component to this child component
  props: [
    'colorCards',
    'colorArr'
  ],
  methods: {
    guess(bgColor) {
      this.$emit('user-guess', bgColor);     
    }
  },
}
</script>

<style scoped>
  .color-container {
    width: 100%;
    height: 100%;
    text-align: center;
  }
  .color-card {
    height: 215px;
    width: 215px;
    margin: 5px;
    float: right;
    box-shadow: 1px 1px 8px #d8d8d8;
    transition: all .3s ease-in-out;
  }
  .color-card:hover{
    cursor: pointer;
    transform: scale(1.02);
    box-shadow: 1px 1px 12px #d8d8d8;
  }
</style>
