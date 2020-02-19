<template>
    <v-app>
        <v-navigation-drawer v-model="drawer" app clipped dark>
            <MenuDemo/>
        </v-navigation-drawer>

        <v-app-bar app clipped-left color="blue">
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"/>
            <v-toolbar-title>Application</v-toolbar-title>
        </v-app-bar>

        <v-content>
            <v-container fluid>
                <router-view/>
            </v-container>
        </v-content>
        <v-divider></v-divider>
        <v-footer app color="green">
            <span>&copy; 2020</span>
        </v-footer>
    </v-app>
</template>

<script>
    import MenuDemo from "../components/Menu/MenuDemo";

    export default {
        props: {
            source: String
        },
        data: () => ({
            mini: true,
            drawer: null
        }),
        components: {
            MenuDemo
        },
        mounted() {
        },
        methods: {}
    };
</script>
<style lang="scss"></style>
