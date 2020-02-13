<template>
    <div>
        <v-toolbar class="d-flex justify-end" flat color="white">
            <v-text-field
                    v-model="search"
                    label="Search"
                    single-line
                    hide-details
                    color="" append-icon="mdi-account-search"
            ></v-text-field>
        </v-toolbar>
        <v-divider></v-divider>
        <v-list>
            <template v-for="item in items">
                <v-list-item
                        v-if="item.id %3===0"
                        :key="item.id"
                >
                    <template v-for="i in [0,1,2]">
                        <v-list-item
                                :key="i"
                        >
                            <v-item style="width: 33%">
                                <v-btn color="primary">{{items[item.id+i].value}}</v-btn>
                            </v-item>
                        </v-list-item>
                    </template>
                </v-list-item>
            </template>
        </v-list>
    </div>
</template>

<script>
    export default {
        name: "ComicBook",
        data() {
            return {
                search: '',
                items: [
                    {id: 0, value: 'book 1', color: 'red'},
                    {id: 1, value: 'book 2', color: 'blue'},
                    {id: 2, value: 'book 3', color: 'green'},
                    {id: 3, value: 'book 4', color: 'red'},
                    {id: 4, value: 'book 5', color: 'blue'},
                    {id: 5, value: 'book 6', color: 'green'},
                    {id: 6, value: 'book 7', color: 'red'},
                    {id: 7, value: 'book 8', color: 'blue'},
                    {id: 8, value: 'book 9', color: 'green'},
                ]
            }
        },
        methods: {}
    }
</script>

<style scoped>

</style>
