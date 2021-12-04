<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Add User</span>
        </v-card-title>
        <v-card-text>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              :rules="nameRules"
              v-model="editedItem.name"
              label="Name"
            >
            </v-text-field>
            <v-text-field
              :rules="mailRules"
              v-model="editedItem.mail"
              label="Mail"
            >
            </v-text-field>
            <v-select
              v-model="editedItem.gender"
              :items="items"
              :rules="[(v) => !!v || 'Gender is required']"
              label="Gender"
            ></v-select>
            <v-menu
              v-model="menu"
              :close-on-content-click="false"
              max-width="290px"
              min-width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  :rules="dateOfBirthRules"
                  label="Date of birth"
                  v-model="editedItem.dateOfBirth"
                  readonly
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="editedItem.dateOfBirth"
                no-title
                @input="menu = false"
              >
              </v-date-picker>
            </v-menu>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="close">Close</v-btn>
          <v-btn color="blue darken-1" text @click="save">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "AddUserDialog",
  data() {
    return {
      valid: true,
      dialog: false,
      editedItem: {
        name: "",
        dateOfBirth: "",
        mail: "",
        gender: "",
      },
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
      ],
      dateOfBirthRules: [(v) => !!v || "Date of birth is required"],
      mailRules: [
        (v) => !!v || "Mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      genderRules: [(v) => !!v || "Gender is required"],
    };
  },
  methods: {
    save() {
      if (this.$refs.form.validate()) {
        if (this.indexRow === -1) {
          this.user_data.push(this.editedItem);
        } else {
          Object.assign(this.user_data[this.indexRow], this.editedItem);
        }
        this.close();
      }
    },
    close() {
      this.dialog = false;
      this.editedItem = {};
      this.indexRow = -1;
    },
  },
};
</script>

<style scoped>
</style>
