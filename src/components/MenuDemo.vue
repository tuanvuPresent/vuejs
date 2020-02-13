<template>
    <v-list dense>
        <template v-for="(link, i) in items">
            <v-list-item
                    link
                    v-if="!link.sub_item"
                    :key="i"
                    :to="link.to"
            >
                <v-list-item-action>
                    <v-icon>{{ link.icon }}</v-icon>
                </v-list-item-action>
                <v-list-item-title v-text="link.title"/>
            </v-list-item>
            <v-list-group v-else :key="link.title" no-action>
                <template v-slot:activator>
                    <v-list-item>
                        <v-list-item-action>
                            <v-icon>{{ link.icon }}</v-icon>
                        </v-list-item-action>
                        <v-list-item-title v-text="link.title"/>
                    </v-list-item>
                </template>
                <v-list-item
                        v-for="sublink in link.sub_item"
                        :to="sublink.to"
                        :key="sublink.title"
                >
                    <v-list-item-title v-text="sublink.title"/>
                </v-list-item>
            </v-list-group>
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
                    {
                        title: 'Home', icon: 'mdi-home', to: '/',
                    },
                    {
                        title: 'User', icon: 'mdi-account', to: '/user'
                    },
                    {
                        title: 'Book', icon: 'mdi-book', to: '/book',
                        sub_item: [
                            {title: 'Edu', icon: 'mdi-book', to: '/book/edu',},
                            {title: 'Comics', icon: 'mdi-book', to: '/book/comic',}
                        ]
                    },
                ],
                mini: true,
            }
        },
    }
</script>

<style scoped>

</style>
