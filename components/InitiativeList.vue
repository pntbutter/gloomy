<script>
export default {
    data() {
        return {
            characters: useCharacters(),
            enemies: useEnemies(),
            open: false,
        }
    },

    computed: {
        units() {
            return this.characters.units.concat(this.enemies.types);
        },
    },
}
</script>

<template>
    <div class="relative  grow  p-4  min-w-[30%]">
        <div class="flex  flex-col  gap-2">
            <InitiativeListUnit v-for="(unit, index) in units" :unit="unit" :key="index" />
        </div>
    </div>
</template>
