const { createApp } = Vue;

  createApp({
    data() {
      return {
        activeMode: "Обычный",
        themes: ["light","dark","cupcake","bumblebee","emerald","corporate","synthwave","retro","cyberpunk","valentine","halloween","garden","forest","aqua","lofi","pastel","fantasy","wireframe","black","luxury","dracula","cmyk","autumn","business","acid","lemonade","night","coffee","winter",],
        activeTheme: "dark",
      }
    },
    methods: {
     setTheme: function(theme) {
      document.querySelector('html').dataset.theme = theme;
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
