<template>
  <div class="content">
    <h2>{{ title }}</h2>
    <div class="calc-container">
      <span class="total">{{ current || '0'}}</span>
      <span @click="clear" class="col top-row">AC</span>
      <span @click="sign" class="col top-row">+/-</span>
      <span @click="percent" class="col top-row">%</span>
      <span @click="divide" class="col operator">÷</span>
      <span @click="append('7')" class="col">7</span>
      <span @click="append('8')" class="col">8</span>
      <span @click="append('9')" class="col">9</span>
      <span @click="times" class="col operator">x</span>
      <span @click="append('4')" class="col">4</span>
      <span @click="append('5')" class="col">5</span>
      <span @click="append('6')" class="col">6</span>
      <span @click="minus" class="col operator">-</span>
      <span @click="append('1')" class="col">1</span>
      <span @click="append('2')" class="col">2</span>
      <span @click="append('3')" class="col">3</span>
      <span @click="add" class="col operator">+</span>
      <span @click="append('0')" class="col2">0</span>
      <span @click="dot" class="col">.</span>
      <span @click="equal" class="col operator">=</span>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Calculator',
    data() {
      return {
        title: 'Calculator',
        previous: null,
        current: '',
        operator: null,
        operatorClicked: false
      }
    },
    methods: {
      clear() {
        this.current = '';
      },
      sign() {
        // if (this.current === 0 || this.current === '') {
        //   this.current = 0;
        // } 
        this.current = this.current.charAt(0) === '-' ?
          this.current.slice(1) : `-${this.current}`;
      },
      percent() {
        this.current = `${parseFloat(this.current) / 100}`;
      },
      append(number) {
        if(this.operatorClicked) {
          this.current = '';
          this.operatorClicked = false;
        }
        this.current = `${this.current}${number}`
      },
      dot() {
        if(this.current.indexOf('.') === -1) {
          this.append('.');
        }
      },
      setPrevious() {
        this.previous = this.current;
        this.operatorClicked = true;
      },
      add() {
        this.operator = (a,b) => a + b;
        this.setPrevious();
      },
      minus() {
        this.operator = (a,b) => b - a;
        this.setPrevious();
      },
      times() {
        this.operator = (a,b) => a * b;
        this.setPrevious();
      },
      divide() {
        this.operator = (a,b) => b / a;
        this.setPrevious();
      },
      equal() {
        this.current = `${this.operator(
          parseFloat(this.current), 
          parseFloat(this.previous)
        )}` 
        this.previous = null;
      }
    },
    beforeMount() {
      if (window.location.pathname == '/calculator') {
        document.body.classList.add('calc');
      } else if (window.location.pathname !== '/calculator') {
        document.body.classList.remove('calc');
      }
    }
  }
</script>

<style>
  .content {
    animation: fadeIn 1.2s;
  }
  .calc-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    flex-flow: row wrap;
    width: 100%;
    max-width: 340px;
    margin: 0 auto;
    padding-top: 10px;
    box-shadow: 3px 3px 40px #262626;
    background-color: rgba(0,0,0,.3);
  }
  h2 {
    color: #fff;
    margin-bottom: 30px;
  }
  .col {
    width: calc(97.5%/4);
    background: white;
    padding: 20px 0px;
    font-size: 18px;
    background-color: #4a4a4a;
    color: #fff;
    cursor: pointer;
    border: 1px solid rgba(50,50,50,.1);
  }
  .col2 {
    width: calc(75%/2);
    padding: 20px;
    font-size: 18px;
    background-color: #4a4a4a;
    color: #fff;
    cursor: pointer;
    border: 1px solid rgba(50,50,50,.1);
  }
  .total {
    width: 80%;
    padding-right: 30px;
    margin-bottom: 10px;
    font-size: 40px;
    text-align: right;
    color: #fff;
    overflow: hidden;
  }
  .operator {
    background-color: orange;
    color: #fff;
  }
  .top-row {
    background-color: #d2d2d2;
    color: #4a4a4a;
  }
</style>


<style>
  .calc {
    background: #232526; 
    background: -webkit-linear-gradient(to right, #232526, #414345);
    background: linear-gradient(to right, #232526, #414345);
  }
  body.calc #nav > ul li a{
    color: #e7e7e7;
  }
</style>

