<template>
  <div class="text-center mt-12">
    <v-rating
      v-model="rating"
      color="yellow darken-3"
      background-color="grey darken-1"
      empty-icon="$ratingFull"
      half-increments
      hover
    ></v-rating>
    <h2>{{ rating }}</h2>
  </div>
</template>

<script>
export default {
  name: "Ratting",
  data: () => ({
    rating: 4.5,
  }),
};
</script>

<style scoped>
</style>
