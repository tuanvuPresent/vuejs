<template>
    <v-layout column>
        <v-toolbar style="color: #d4f0ff">
            <v-text-field
                    v-model="search"
                    label="Search"
                    single-line
                    hide-details
                    color="" append-icon="mdi-account-search">
            </v-text-field>
        </v-toolbar>
        <v-layout row>
            <v-col :sm="8" style="background: #7a92b9" v-model="items" v-for="(item,i) in items" :key="item.id">
                <template>
                    <v-row gutters v-if="item.id %2 === 0">
                        <v-col v-for="col in [0,1]" :key="col">
                            <v-card @click="click(items[i+col])" height="250" v-if="items[i+col]">
                                <v-card-title>
                                    {{items[i+col].title}}
                                </v-card-title>
                                <v-card-text>
                                    {{items[i+col].text}}
                                </v-card-text>
                                <v-card-subtitle>
                                    {{items[i+col].color}}
                                </v-card-subtitle>
                                <v-divider></v-divider>
                                <v-card-actions>
                                    <v-icon>mdi-school</v-icon>
                                </v-card-actions>
                            </v-card>
                        </v-col>
                    </v-row>
                </template>
            </v-col>
            <v-col :sm="4" style="background: #03b9ad">
                <v-card>
                    <v-card-title>
                        title
                    </v-card-title>
                    <v-card-text>
                        text
                    </v-card-text>
                    <v-card-subtitle>
                        sub title
                    </v-card-subtitle>
                    <v-card-actions>
                        <v-icon>mdi-home</v-icon>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-layout>
    </v-layout>
</template>

<script>
    export default {
        name: "ComicBook",
        data() {
            return {
                search: '',
                items: [
                    {id: 0, title: 'book 0', text: 'read book 0', color: 'red'},
                    {id: 1, title: 'book 1', text: 'read book 1', color: 'red'},
                    {id: 2, title: 'book 2', text: 'read book 2', color: 'blue'},
                    {id: 3, title: 'book 3', text: 'read book 3', color: 'green'},
                    {id: 4, title: 'book 4', text: 'read book 4', color: 'red'},
                    {id: 5, title: 'book 5', text: 'read book 5', color: 'blue'},
                    {id: 6, title: 'book 6', text: 'read book 6', color: 'green'},
                    {id: 7, title: 'book 7', text: 'read book 7', color: 'red'},
                    {id: 8, title: 'book 8', text: 'read book 8', color: 'blue'},
                    {id: 9, title: 'book 9', text: 'read book 9', color: 'green'},
                    {id: 10, title: 'book 10', text: 'read book 10', color: 'green'},
                ]
            }
        },
        methods: {
            click(item) {
                alert(item.title)
            }
        }
    }
</script>

<style scoped>

</style>
