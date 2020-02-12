<template>
    <v-list dense>
        <template v-for="(link, i) in items">
            <v-list-item
                    :key="i"
                    :to="link.to"
                    link
            >
                <v-list-item-action>
                    <v-icon>{{ link.icon }}</v-icon>
                </v-list-item-action>
                <v-list-item-title v-text="link.title"/>
            </v-list-item>
        </template>
    </v-list>
</template>
<script>
    export default {
        name: "MenuDemo",
        data() {
            return {
                drawer: true,
                items: [
                    {title: 'Home', icon: 'mdi-home', to: '/'},
                    {title: 'User', icon: 'mdi-account', to: '/user'},
                    {title: 'Book', icon: 'mdi-book', to: '/book'},
                ],
                mini: true,
            }
        },
    }
</script>

<style scoped>

</style>
