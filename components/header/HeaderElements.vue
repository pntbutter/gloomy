<script>
export default {
    data() {
        return {
            elements: useElements(),
        }
    },
}
</script>

<template>
    <div class="flex">
        <div v-for="(value, key) in elements.elements" class="">
            <HeaderElementsButton :element="key" :value="value" @click="elements.handleChange(key)" />
        </div>
    </div>
</template>
