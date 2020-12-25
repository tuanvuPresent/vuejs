<template>
    <v-row align="center">
        <v-col cols="12">
            <v-select
                    :items="items"
                    :menu-props="{ top: true, offsetY: true }"
                    label="Label"
            ></v-select>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        name: "ChoiceDemo",
        data: () => ({
            items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
        }),
    }
</script>

<style scoped>
</style>
