<template>
  <div>
    <v-progress-linear
      v-model="power"
      color="amber"
      height="25"
      reactive
    ></v-progress-linear>

    <br />

    <v-progress-linear v-model="skill" color="blue-grey" height="25" reactive>
      <template v-slot="{ value }">
        <strong>{{ Math.ceil(value) }}%</strong>
      </template>
    </v-progress-linear>

    <br />

    <v-progress-linear v-model="knowledge" height="25" reactive>
      <strong>{{ Math.ceil(knowledge) }}%</strong>
    </v-progress-linear>
  </div>
</template>

<script>
export default {
  name: "ProgressLinearDemo",
  data: () => ({
    skill: 20,
    knowledge: 33,
    power: 78,
  }),
};
</script>

<style scoped>
</style>
