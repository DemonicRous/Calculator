const { createApp } = Vue;

  createApp({
    data() {
      return {
        activeMode: {name: "Обычный", mode: "simple"},
        themes: ["light","dark","cupcake","bumblebee","emerald","corporate","synthwave","retro","cyberpunk","valentine","halloween","garden","forest","aqua","lofi","pastel","fantasy","wireframe","black","luxury","dracula","cmyk","autumn","business","acid","lemonade","night","coffee","winter",],
        activeTheme: "dark",
        modeTheme: localStorage.getItem('activeTheme'),
        modeMemory: false,
      }
    },
    methods: {
     setTheme: function(theme) {
      document.querySelector('html').dataset.theme = theme;
      localStorage.setItem('activeTheme', theme);
      this.modeTheme = localStorage.getItem('activeTheme')
     },
     simpleСheckInput: function() {
      let input = document.getElementById('inputCalc');
      input.value = input.value.replace('= ', '');
      input.value = input.value.replace(/[^0-9\.\,\-+/*()%√∞]/g, '');
      console.log(input.value)
     },
     simpleCalcClearSymbol: function() {
      let input = document.getElementById('inputCalc');
      input.value = input.value.replace(/[^0-9\.\,\-+/*()%√∞]/g, '');
     },
     simpleKeyboard: function(key) {
      let input = document.getElementById('inputCalc');
      let inputAfter = document.getElementById('inputAfter');
      switch (key) {
      case 'Del':
        input.value = input.value.substring(0, input.value.length - 1);
          //console.log(input.value.substring(0, input.value.length - 1));
          break;
        case 1:
          if (input.value.slice(-1) !== '∞') {input.value += key;}
          break;
        case 2:
          if (input.value.slice(-1) !== '∞') {input.value += key;}
          break;
        case 3:
          if (input.value.slice(-1) !== '∞') {input.value += key;}
          break;
        case 4:
          if (input.value.slice(-1) !== '∞') {input.value += key;}
          break;
        case 5:
          if (input.value.slice(-1) !== '∞') {input.value += key;}
          break;
        case 6:
          if (input.value.slice(-1) !== '∞') {input.value += key;}
          break;
        case 7:
          if (input.value.slice(-1) !== '∞') {input.value += key;}
          break;
        case 8:
          if (input.value.slice(-1) !== '∞') {input.value += key;}
          break;
        case 9:
          if (input.value.slice(-1) !== '∞') {input.value += key;}
          break;
        case 0:
          if (input.value.slice(-1) !== '∞') {input.value += key;}
          break;
        case '(':
          if (!isNaN(input.value.slice(-1)) || (input.value == "") || (input.value == "(") || (input.value.slice(-1) == '+') || (input.value.slice(-1) == '-') || (input.value.slice(-1) == '*') || (input.value.slice(-1) == '/')) {input.value += key;}
          break;
        case ')':
          if (!isNaN(input.value.slice(-1)) || (input.value == "") || (input.value == ")")) {input.value += key;}
          break;
        case '+':
          if (!isNaN(input.value.slice(-1)) || (input.value == "") || (input.value.slice(-1) == '(') || (input.value.slice(-1) == ')')) {
            input.value += key;
          }
          break;
        case '-':
          if (!isNaN(input.value.slice(-1)) || (input.value == "") || (input.value.slice(-1) == '(') || (input.value.slice(-1) == ')')) {
            input.value += key;
          }
          break;
        case '*':
          if (!isNaN(input.value.slice(-1)) || (input.value == "") || (input.value.slice(-1) == '(') || (input.value.slice(-1) == ')')) {
            input.value += key;
          }
          break;
        case '/':
          if (!isNaN(input.value.slice(-1)) || (input.value == "") || (input.value.slice(-1) == '(') || (input.value.slice(-1) == ')')) {
            input.value += key;
          }
          break;
        case ',':
          if (!isNaN(input.value.slice(-1)) && !(input.value == "") && !(input.value.length == 0) && !(input.value == null)) {
            input.value += '.';
          }
          break;
        case '=':
          try {
            //function isInteger(x) { return typeof x === "number" && isFinite(x) && Math.floor(x) === x; }
            function isFloat(x) { return !!(x % 1); }

            if (!isNaN(input.value.slice(-1)) || input.value.slice(-1) === '.' || input.value == "" || input.value.slice(-1) === ')' || input.value.slice(-1) === '∞') {
              input.value = input.value.replace(',', '.');
              //input.value = input.value.replace('= ', '');
              //input.value = input.value.replace('= ∞', Infinity);
              //input.value = input.value.replace('= -∞', -Infinity);

              if (eval(input.value) !== undefined) {
                if (eval(input.value) === Infinity) {
                  inputAfter.value = input.value;
                  input.value = '= ∞';
                } else if (eval(input.value) === -Infinity) {
                  inputAfter.value = input.value;
                  input.value = '= -∞';
                } else if (isFloat(eval(input.value))) {
                  inputAfter.value = input.value;
                  input.value = '= ' + Math.round(eval(input.value) * 100) / 100;
                } else {
                  inputAfter.value = input.value;
                  input.value = '= ' + eval(input.value);
                }
                
              } else {
                inputAfter.value = 0;
                input.value = '= ' + 0;
              }
            
            } else {
              console.log('Error')
            }
          } catch (e) {
            console.log(e)
          }
          break;
        default:
          alert( "Нет таких значений" );
      }
     }
    },
    mounted() {

      function activateTheme(theme) {
        document.querySelector('html').dataset.theme = theme;
      }

      if (localStorage.activeTheme) {
        activateTheme(localStorage.getItem('activeTheme'));
      } else {
        localStorage.setItem('activeTheme', this.activeTheme);
        activateTheme(localStorage.getItem('activeTheme'));
      }

      

    }
  }).mount('#app')
