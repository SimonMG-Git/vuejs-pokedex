<template>
  <div class="container">
    <div class="pokemon-list">
      <h1>POKEDEX</h1>
      <PokemonList
        :apiUrl="apiUrl"
        :imageUrl="imageUrl"
        @setPokemonUrl="setPokemonUrl"
      />
    </div>
  </div>
</template>

<script>
import PokemonList from "@/components/PokemonList.vue";

export default {
  data: () => {
    return {
      // eslint-disable-next-line prettier/prettier
      imageUrl: "https://pokeres.bastionbot.org/images/pokemon/",
      apiUrl: "https://pokeapi.co/api/v2/pokemon?limit=151",
      pokemonUrl: ""
    };
  },
  components: {
    PokemonList
  },
  methods: {
    setPokemonUrl(url) {
      this.pokemonUrl = url;
    }
  }
};
</script>

<style scoped>
.container {
  width: 50%;
  margin-left: 25%;
  margin-right: 25%;
}
.pokemon-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
