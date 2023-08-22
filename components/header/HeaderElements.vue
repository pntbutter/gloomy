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
    <div class="flex  gap-3">
        <div v-for="(value, key) in elements.elements" class="w-16  h-16">
            <HeaderElementsButton :element="key" :value="value" @click="elements.handleChange(key)" />
        </div>
    </div>
</template>
