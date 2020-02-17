<template>
    <v-container>
        <v-toolbar style="color: #d4f0ff" class="d-flex justify-end">
            <v-text-field
                    v-model="search"
                    label="Search"
                    single-line
                    hide-details
                    color="" append-icon="mdi-account-search">
            </v-text-field>
        </v-toolbar>
        <v-row class="d-flex justify-space-between">
            <v-col :sm="8">
                <v-card>
                    <v-col
                            style="background: #9fb5b9"
                            v-model="items"
                            v-for="(item,i) in items"
                            :key="item.id">
                        <v-row gutters v-if="item.id %3 === 0">
                            <v-col v-for="col in [0,1,2]" :key="col">
                                <v-card
                                        @click="click(items[i+col])"
                                        v-if="items[i+col]"
                                >
                                    <v-card-title>
                                        <v-img src="https://cdn.vuetifyjs.com/images/cards/house.jpg" max-width="180"
                                               max-height="160">
                                        </v-img>
                                    </v-card-title>
                                    <v-card-title>Name: {{items[i+col].title}}</v-card-title>
                                    <v-card-text>Description: {{items[i+col].text}}</v-card-text>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-card>
            </v-col>
            <v-col :sm="4">
                <v-card>
                    <v-col style="background: #03b9ad">
                        <v-card>
                            <v-card-title>title</v-card-title>
                            <v-card-text>text</v-card-text>
                            <v-card-subtitle>sub title</v-card-subtitle>
                            <v-card-actions>
                                <v-icon>mdi-home</v-icon>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "ComicBook",
        data() {
            return {
                page: 1,
                search: '',
                items: [
                    {
                        id: 0,
                        title: 'book 0',
                        text: 'read book 0',
                        subtitle: 'red',
                        src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg'
                    },
                    {id: 1, title: 'book 1', text: 'read book 1', subtitle: 'red'},
                    {id: 2, title: 'book 2', text: 'read book 2', subtitle: 'blue'},
                    {id: 3, title: 'book 3', text: 'read book 3', subtitle: 'green'},
                    {id: 4, title: 'book 4', text: 'read book 4', subtitle: 'red'},
                    {id: 5, title: 'book 5', text: 'read book 5', subtitle: 'blue'},
                    {id: 6, title: 'book 6', text: 'read book 6', subtitle: 'green'},
                    {id: 7, title: 'book 7', text: 'read book 7', subtitle: 'red'},
                    {id: 8, title: 'book 8', text: 'read book 8', subtitle: 'blue'},
                    {id: 9, title: 'book 9', text: 'read book 9', subtitle: 'green'},
                    {id: 10, title: 'book 10', text: 'read book 10', subtitle: 'green'},
                ]
            }
        },
        methods: {
            click(item) {
                fetch('https://jsonplaceholder.typicode.com/posts')
                    .then(response => response.json())
                    .then(json => {
                        console.log(json)
                    });
                axios.get('http://127.0.0.1:8000/api/v1/master/member/')
                    .then(response => {
                        this.posts = response.data
                        console.log(response.data)
                        console.log(this.items)
                    })
                    .catch(e => {
                        this.errors.push(e)
                    })
                alert(item.title)
            }
        },
    }
</script>

<style scoped>

</style>
