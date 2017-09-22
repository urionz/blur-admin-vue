<template>
    <div class="al-main">
        <router-view :key="key"></router-view>
    </div>
</template>

<script>
export default {
    name: 'AppMain',
    computed: {
        key() {
            return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
        }
    }
}
</script>
