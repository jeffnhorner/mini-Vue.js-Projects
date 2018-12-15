<template>
  <div class="content">
    <h3>RGB{{ randColor }} Color Game</h3>
    <div class="header">
      <button @click="easyMode">Easy</button>
      <button @click="hardMode">Hard</button>
    </div>

    <ColorCards></ColorCards>

  </div>
</template>

<script>
import ColorCards from './ColorCards';

export default {
  name: 'ColorGame',
  data() {
    return {
      randColor: '',
      numColorCards: 6,
      colors: null,
      colorCards: null,
    }
  },
  components: {
    ColorCards
  },
  methods: {
    /* we're doing a few things here: we're grabbing all of the colorCards and also using the array from
     the numberOfSquares method. First, we're looping over all of the colorCards. We then are looking to see how many items the array contains. If there are items in the array, it will set display:block on the colorCards based upon the numColorCards defined in the button click events (easyGame, hardGame) */
    setupColorCards() {
      this.colorCards = document.querySelectorAll('.color-box');
      this.colors = this.numberOfSquares(this.numColorCards);

      for (let i = 0; i < this.colorCards.length; i++) {
        if(this.colors[i]) {
          this.colorCards[i].style.display = 'block';
        } else {
          this.colorCards[i].style.display = 'none';
        }
      }
    },
    /* when clicked the easy mode button, we define the number of color cards to 3 and call the setupColor
    method */
    easyMode() {
        this.numColorCards = 3;
        this.setupColorCards();
    },
    /* when clicked the easy mode button, we define the number of color cards to 3 and call the setupColor
    method */
    hardMode() {
        this.numColorCards = 6;
        this.setupColorCards();
    },
    /* based upon which game mode (easy - 3 squares || hard - 6 squares), this method pushes the number of squares into an array and returns that array so we can use it in the setupColorCards method defined above. */
    numberOfSquares(num) {
      let arr = [];
      for (let i = 0; i < num; i++) {
        arr.push(num) 
      }
      return arr;
    },
    randomColor() {
      let r,g,b;
      r= '1';

      console.log(r,g,b);
    }
  },
  // beforeCreate() {
  //   let colorContainer = document.querySelector(".color-container");
  //   let colorBox = colorContainer.innerHTML += '<div class="color-box"></div>';
  // }
}
</script>

<style>
  .content {
    animation: fadeIn 1.2s;
  }
  .header {
    margin-bottom: 20px;
  }
  .color-container {
    width: 100%;
    height: 100%;
    max-width: 1000px;
    text-align: center;
  }
  .color-box {
    height: 200px;
    width: 200px;
    margin: 5px;
    float: right;
    background-color: maroon;
  }
  .hide {
    display: none;
  }
  .fadeOut {
    animation: fadeOut .5s;
    display: none;
  }
  .fadeIn {
    animation: fadeIn .5s;
    display: block;
  }
</style>

