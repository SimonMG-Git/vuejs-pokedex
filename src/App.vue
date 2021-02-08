<template>
  <body>
    <div id="app">
      <Pokemon />
    </div>
  </body>
</template>

<script>
import Pokemon from "@/components/Pokemon.vue";
export default {
  components: {
    Pokemon
  }
};
</script>

<style>
html {
  height: 100%;
}

body {
  height: 100%;
  margin: 0;
  background-repeat: no-repeat;
  background-attachment: fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-color: #2d70b7;
  background-image: linear-gradient(180deg, #2d70b7 0%, #21386e 100%);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1 {
  color: white;
  text-shadow: 1px 3px rgba(0, 0, 0, 0.5);
}
</style>
