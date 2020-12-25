<template>
    <v-data-table
            :headers="headers"
            :items="user_data"
            :search="search"
            sort-by="name"
            class="elevation-1"
    >
        <template v-slot:top>
            <v-toolbar flat color="white">
                <v-text-field
                        v-model="search"
                        label="Search"
                        single-line
                        hide-details
                        color="" append-icon="mdi-account-search"
                ></v-text-field>
                <v-divider class="mx-4" inset vertical></v-divider>
                <v-spacer></v-spacer>
                <v-dialog v-model="dialog" persistent max-width="600px">
                    <template v-slot:activator="{ on }">
                        <v-icon v-on="on" large color="blue darken-2">mdi-plus-circle-outline</v-icon>
                    </template>
                    <v-card>
                        <v-card-title>
                            <span class="headline">Add User</span>
                        </v-card-title>
                        <v-card-text>
                            <v-form
                                    ref="form"
                                    v-model="valid"
                                    lazy-validation
                            >
                                <v-text-field
                                        :rules="nameRules"
                                        v-model="editedItem.name"
                                        label="Name">
                                </v-text-field>
                                <v-text-field
                                        :rules="mailRules"
                                        v-model="editedItem.mail"
                                        label="Mail">
                                </v-text-field>
                                <v-select
                                        v-model="editedItem.gender"
                                        :items="items"
                                        :rules="[v => !!v || 'Gender is required']"
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
                                            @input="menu = false">
                                    </v-date-picker>
                                </v-menu>
                            </v-form>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="primary" @click="close">Cancel</v-btn>
                            <v-btn color="success" @click="save">Save
                                <v-icon dark>mdi-check-circle-outline</v-icon>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-toolbar>
        </template>
        <template v-slot:item.action="{ item }">
            <v-icon @click="editItem(item)" style="color: #42b983">
                mdi-pencil
            </v-icon>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-icon @click="deleteItem(item)">
                mdi-delete
            </v-icon>
        </template>
        <template v-slot:no-data>
            <span>No Data</span>
        </template>
    </v-data-table>
</template>

<script>
    export default {
        data: () => ({
            menu: false,
            items: ['Male', 'Female', 'Other'],
            valid: true,
            search: '',
            dialog: false,
            headers: [
                {text: 'Name', sortable: false, value: 'name'},
                {text: 'Date of birth', value: 'dateOfBirth'},
                {text: 'Mail', value: 'mail'},
                {text: 'Gender', value: 'gender'},
                {text: 'Actions', value: 'action', sortable: false},
            ],
            user_data: [],
            indexRow: -1,
            editedItem: {
                name: '',
                dateOfBirth: '',
                mail: '',
                gender: '',
            },
            nameRules: [
                v => !!v || 'Name is required',
                v => (v && v.length <= 10) || 'Name must be less than 10 characters',
            ],
            dateOfBirthRules: [
                v => !!v || 'Date of birth is required',
            ],
            mailRules: [
                v => !!v || 'Mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            genderRules: [
                v => !!v || 'Gender is required',
            ],
        }),
        computed: {
            formTitle() {
                return this.indexRow === -1 ? 'Add New Item' : 'Edit Item'
            },
        },
        created() {
            this.initialize()
        },
        methods: {
            initialize() {
                this.user_data = [
                    {name: 'Ya', dateOfBirth: '2000-1-1', mail: 'a@gmail.com', gender: 'Male'},
                    {name: 'As', dateOfBirth: '1999-1-2', mail: 'b@gmail.com', gender: 'Male'},
                    {name: 'Pho', dateOfBirth: '1998-1-2', mail: 'c@gmail.com', gender: 'Female'},
                ]
            },

            editItem(item) {
                this.indexRow = this.user_data.indexOf(item);
                this.editedItem = Object.assign({}, item);
                this.dialog = true
            },

            deleteItem(item) {
                const index = this.user_data.indexOf(item);
                confirm('Are you sure you want to delete this item?') && this.user_data.splice(index, 1)
            },

            save() {
                if (this.$refs.form.validate()) {
                    if (this.indexRow === -1) {
                        this.user_data.push(this.editedItem)
                    } else {
                        Object.assign(this.user_data[this.indexRow], this.editedItem)
                    }
                    this.close()
                }
            },

            close() {
                this.dialog = false;
                this.editedItem = {};
                this.indexRow = -1
            },
        },
        components: {}
    }
</script>

<style scoped>

</style>
