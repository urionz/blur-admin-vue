<template>
    <input
        v-bind="$props"
        class="form-control"
        :value="currentValue"
        @input="handleInput"
        >
</template>
<script>
export default{
    name: 'BaInput',
    data() {
        return {
            currentValue: this.value
        }
    },
    props: {
        value: [String, Number],
        placheholder: String,
        name: String
    },
    watch: {
        'value'(val, oldValue) {
            console.log('1111')
            this.setCurrentValue(val)
        }
    },
    methods: {
        handleInput(event) {
            const value = event.target.value
            this.setCurrentValue(value)
        },
        setCurrentValue(value) {
            if (value === this.currentValue) return
            this.currentValue = value
        }
    }
}
</script>
