<script>
export default {
    data() {
        return {
            characters: useCharacters(),
            enemies: useEnemies(),
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
    <div class="relative  grow  p-6  min-w-[30%]">
        <div class="flex  flex-col  gap-2">
            <label v-for="(unit, index) in units" class="flex  items-center  gap-2" :style="{ order: unit.initiative }">
                <span class="mr-auto  text-xl">{{ unit.name }}</span>

                <input type="number" v-model="unit.initiative" @focus="unit.initiative = ''" min="1" max="99" class="w-16  px-4  py-2  bg-slate-900  rounded  text-xl  text-center  xl:w-20">
            </label>
        </div>
    </div>
</template>
