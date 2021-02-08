<template>
  <div class="pokemon-list">
    <article v-for="(pokemon, index) in pokemons" :key="'poke' + index">
      <img
        :src="imageUrl + pokemon.id + '.png'"
        width="96"
        height="96"
        alt=""
      />
      <h2>{{ pokemon.name }}</h2>
    </article>
  </div>
</template>

<script>
export default {
  props: ["apiUrl", "imageUrl"],
  data: () => {
    return {
      pokemons: [],
      nextUrl: "",
      currentUrl: ""
    };
  },
  methods: {
    fetchData() {
      let req = new Request(this.currentUrl);
      fetch(req)
        .then(resp => {
          if (resp.status === 200) return resp.json();
        })
        .then(data => {
          this.nextUrl = data.next;
          data.results.forEach(pokemon => {
            pokemon.id = pokemon.url
              .split("/")
              .filter(function(part) {
                return !!part;
              })
              .pop();
            this.pokemons.push(pokemon);
          });
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  created() {
    this.currentUrl = this.apiUrl;
    this.fetchData();
  }
};
</script>

<style scoped>
article {
  padding: 20px;
  width: 150px;
  height: 150px;
  cursor: pointer;
  margin: 5px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
  align-items: center;
}
article:hover {
  transform: scale(1.01);
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
}
h2 {
  padding: 0px 20px 0px 20px;
}
</style>
