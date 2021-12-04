<template>
  <div>
    <v-col>
      <v-toolbar style="color: #d4f0ff">
        <v-text-field
          v-model="search"
          label="Search"
          single-line
          hide-details
          color=""
          append-icon="mdi-account-search"
        >
        </v-text-field>
      </v-toolbar>
    </v-col>
    <v-row>
      <v-col style="background: #7a92b9" :sm="8">
        <v-row gutters v-for="row in 5" :key="row">
          <v-col v-for="col in 3" :key="col">
            <v-card @click="click((row - 1) * 3 + col)">
              <v-card-title> title {{ (row - 1) * 3 + col }} </v-card-title>
              <v-card-text> text </v-card-text>
              <v-card-subtitle> sub title </v-card-subtitle>
              <v-divider></v-divider>
              <v-card-actions>
                <v-icon>mdi-home</v-icon>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col :sm="4">
        <v-card>
          <v-card-title> title </v-card-title>
          <v-card-text> text </v-card-text>
          <v-card-subtitle> sub title </v-card-subtitle>
          <v-card-actions>
            <v-icon>mdi-home</v-icon>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "GridDemo",
  methods: {
    click(item) {
      alert(item);
    },
  },
};
</script>

<style scoped>
</style>
