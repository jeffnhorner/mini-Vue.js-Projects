<template>
  <div class="color-container">
    <div @click="guess" class="color-card"></div>
    <div @click="guess" class="color-card"></div>
    <div @click="guess" class="color-card"></div>
    <div @click="guess" class="color-card"></div>
    <div @click="guess" class="color-card"></div>
    <div @click="guess" class="color-card"></div>
  </div>
</template>

<script>
export default {
  name: 'ColorCard',
  // passing colorCard props from the parent component to this child component
  props: [
    'colorCards',
    'colors'
  ],
  data() {
    return {
      
    }
  },
  methods: {
    guess() {
      
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
    height: 230px;
    width: 230px;
    margin: 5px;
    float: right;
    background-color: maroon;
    transition: all .3s ease-in-out;
  }
  .color-card:hover{
    cursor: pointer;
    transform: scale(1.02);
    box-shadow: 1px 1px 8px #d8d8d8;
  }
</style>
