<script>
export default {
    data() {
        return {
            show_edit: false,
            initiative: useInitiative(),
            characters: useCharacters(),
            enemies: useEnemies(),

            deleteUnit(index) {
                if (confirm('Are you sure?')) {
                    this.initiative.units.splice(index, 1);
                }
            },
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
        <header class="flex  items-center  justify-between  mb-6">
            <h2 class="text-xl  font-bold">Initiative</h2>

            <button @click="show_edit = !show_edit">
                <IconEdit />
            </button>
        </header>

        <div class="flex  flex-col  gap-4">
            <div v-for="(unit, index) in units" class="flex  items-center  gap-2" :style="{ order: unit.initiative }">
                <span class="mr-auto  text-xl">{{ unit.name }}</span>

                <input type="number" v-model="unit.initiative" min="1" max="99" class="w-16  px-4  py-2  bg-slate-900  rounded  text-xl  text-center  xl:w-20">
            </div>
        </div>

        <div v-if="show_edit" class="absolute  inset-0  p-6  bg-slate-700  border  border-slate-800">
            <header class="flex  items-center  justify-between  mb-6">
                <h3 class="text-xl  font-bold">Edit initiative</h3>

                <button type="button" @click="show_edit = false">
                    <IconClose />
                </button>
            </header>

            <div class="flex  flex-col  gap-4">
                <div v-for="(unit, index) in initiative.units" class="flex  items-center  gap-2">
                    <input type="text" v-model="unit.name" class="flex-auto  px-4  py-2  rounded  bg-slate-900">

                    <button type="button" v-if="!unit.is_character" @click="deleteUnit(index)" class="grid  place-content-center  w-8  h-8  text-red-500  opacity-75  transition  hover:opacity-100">
                        <IconDelete />
                    </button>
                </div>

                <div class="order-last">
                    <button type="button" @click="initiative.addUnit">
                        <IconPlus />
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
