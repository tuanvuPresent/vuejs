<template>
    <v-app>
        <v-navigation-drawer v-model="drawer" app clipped>
            <MenuDemo/>
        </v-navigation-drawer>

        <v-app-bar app clipped-left color="green">
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"/>
            <v-toolbar-title>Application</v-toolbar-title>
        </v-app-bar>

        <v-content>
            <v-container class="fill-height" fluid>
                <router-view/>
            </v-container>
        </v-content>

        <v-footer app color="red">
            <span>&copy; 2020</span>
        </v-footer>
    </v-app>
</template>

<script>
    import MenuDemo from "../components/MenuDemo";

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
