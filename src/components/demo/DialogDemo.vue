<template>
    <div class="text-center">
        <v-dialog v-model="dialog" width="500" fullscreen="fullscreen">
            <template v-slot:activator="{ on }">
                <v-btn color="red lighten-2" dark v-on="on" @click="showDialog">
                    Click Me
                </v-btn>
            </template>

            <v-card>
                <v-card-title class="headline grey lighten-2" primary-title>
                    Privacy Policy
                </v-card-title>
                <v-card-text>Text</v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" text @click="dialog = false">
                        I accept
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    export default {
        name: "DialogDemo",
        data() {
            return {
                dialog: false
            };
        },
        methods: {
            showDialog() {
                this.$data.dialog = true;
            }
        }
    };
</script>

<style scoped></style>
