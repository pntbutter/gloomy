<script>
export default {
    data() {
        return {
            characters: useCharacters(),
        }
    },
}
</script>

<template>
    <CharacterUnit v-for="(character, index) in characters.units" :char="character" :key="index" />
</template>
