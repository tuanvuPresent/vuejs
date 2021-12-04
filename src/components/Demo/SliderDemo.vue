<template>
  <v-card-text>
    <v-slider
      v-model="zoom"
      append-icon="zoom_in"
      prepend-icon="zoom_out"
      @click:append="zoomIn"
      @click:prepend="zoomOut"
    ></v-slider>
  </v-card-text>
</template>

<script>
export default {
  name: "SliderDemo",
  data() {
    return {
      zoom: 0,
    };
  },

  methods: {
    zoomOut() {
      this.zoom = this.zoom - 10 || 0;
    },
    zoomIn() {
      this.zoom = this.zoom + 10 || 100;
    },
  },
};
</script>

<style scoped>
</style>
