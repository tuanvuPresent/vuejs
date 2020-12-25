<template>
    <h2>
        This is Home
    </h2>
</template>

<script>
    import {createComponent, onMounted} from "@vue/composition-api";

    export default createComponent({
        setup() {
            onMounted(() => {
                console.log(process.env)
            })
            return {}
        },
        components: {}
    });
</script>

<style scoped>

</style>
