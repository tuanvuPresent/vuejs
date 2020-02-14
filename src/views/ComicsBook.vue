<template>
    <div>
        <v-col>
            <v-toolbar style="color: #d4f0ff">
                <v-text-field
                        v-model="search"
                        label="Search"
                        single-line
                        hide-details
                        color="" append-icon="mdi-account-search">
                </v-text-field>
            </v-toolbar>
        </v-col>
        <v-row>
            <v-col style="background: #7a92b9" :sm="8" v-model="items">
                <v-row gutters v-for="row in 4" :key="row">
                    <v-col v-for="col in 2" :key="col">
                        <v-card @click="click((row-1)*2+col)" height="250">
                            <v-card-title>
                                {{items[(row-1)*2+col-1].title}}
                            </v-card-title>
                            <v-card-text>
                                {{items[(row-1)*2+col-1].color}}
                            </v-card-text>
                            <v-card-subtitle>
                                {{items[(row-1)*2+col-1].id}}
                            </v-card-subtitle>
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
        </v-row>
    </div>
</template>

<script>
    export default {
        name: "ComicBook",
        data() {
            return {
                search: '',
                items: [
                    {id: 1, title: 'book 1', color: 'red'},
                    {id: 2, title: 'book 2', color: 'blue'},
                    {id: 3, title: 'book 3', color: 'green'},
                    {id: 4, title: 'book 4', color: 'red'},
                    {id: 5, title: 'book 5', color: 'blue'},
                    {id: 6, title: 'book 6', color: 'green'},
                    {id: 7, title: 'book 7', color: 'red'},
                    {id: 8, title: 'book 8', color: 'blue'},
                    {id: 9, title: 'book 9', color: 'green'},
                ]
            }
        },
        methods: {}
    }
</script>

<style scoped>

</style>
