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
            <HeaderElementsButton :element="key" :value="value" @click="elements.handle_change(key)" />
        </div>
    </div>
</template>
