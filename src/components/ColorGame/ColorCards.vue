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
  .color-card {
    height: 200px;
    width: 200px;
    margin: 5px;
    float: right;
    background-color: maroon;
    transition: all .2s ease-in-out;
  }
  .color-card:hover{
    cursor: pointer;
    transform: scale(1.025);
  }
</style>
