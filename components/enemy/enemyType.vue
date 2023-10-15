<script>
export default {
    data() {
        return {
            show_edit: false,
            enemies: useEnemies(),
        }
    },
    methods: {
        add_normal() {
            this.enemy.units.push({
                elite: false,
                hp: this.enemy.max_hp_normal,
            });
        },
        add_elite() {
            this.enemy.units.push({
                elite: true,
                hp: this.enemy.max_hp_elite,
            });
        },
        remove_unit(index) {
            this.enemy.units.splice(index, 1);
        },
    },
    props: [
        'enemy',
        'index',
    ],
}
</script>

<template>
    <div class="flex  flex-col  gap-2  p-4  bg-slate-800">
        <div class="flex  items-center  justify-between  gap-2  w-full">
            <h3 class="text-xl  font-bold">{{ enemy.name }}</h3>

            <button type="button" @click="show_edit = true">
                <IconEdit class="opacity-50" />
            </button>
        </div>

        <div class="space-y-2">
            <EnemyTypeUnit v-for="(unit, index) in enemy.units" :unit="unit" :enemy="enemy" :index="index" :key="index" />
        </div>

        <div v-if="show_edit" @click="show_edit = false" class="modal-wrap">
            <div @click.stop class="modal-content">
                <header class="flex  items-center  justify-between  pb-3">
                    <h3 class="text-xl  font-bold">Edit {{ enemy.name }}</h3>

                    <button type="button" @click="show_edit = false">
                        <IconClose />
                    </button>
                </header>

                <label class="grid  grid-cols-3  items-center  gap-3">
                    <span>Name:</span>
                    <input type="text" v-model="enemy.name" class="col-span-2  px-4  py-2  rounded  bg-slate-900">
                </label>

                <label class="grid  grid-cols-3  items-center  gap-3">
                    <span>Max normal HP:</span>
                    <input type="number" v-model="enemy.max_hp_normal" class="col-span-2  px-4  py-2  rounded  bg-slate-900">
                </label>

                <label class="grid  grid-cols-3  items-center  gap-3">
                    <span>Max elite HP:</span>
                    <input type="number" v-model="enemy.max_hp_elite" class="col-span-2  px-4  py-2  rounded  bg-slate-900">
                </label>

                <h3 class="mt-8  text-xl  font-bold">Units</h3>

                <div class="flex  flex-wrap  gap-4">
                    <button type="button" v-for="(unit, index) in enemy.units" @click="remove_unit(index)" class="relative  overflow-hidden  grid  place-content-center  w-14  h-14  rounded  text-xs  text-white" :class="unit.elite ? 'bg-amber-300' : 'bg-white'">
                        <div class="absolute  left-0  top-0  w-5  h-4  rounded-br  bg-slate-700">{{ index+1 }}</div>
                        <IconClose class="text-black" />
                    </button>
                </div>

                <div class="flex  gap-4  mt-2">
                    <button type="button" @click="add_normal" :disabled="enemy.units.length == 10" class="flex  items-center  gap-2  px-4  py-2.5  rounded  bg-white  text-black  disabled:opacity-50">
                        <IconPlus /> Add normal unit
                    </button>

                    <button type="button" @click="add_elite" :disabled="enemy.units.length == 10" class="flex  items-center  gap-2  px-4  py-2.5  rounded  bg-amber-300  text-black  disabled:opacity-50">
                        <IconPlus /> Add elite unit
                    </button>

                    <button type="button" @click="enemies.remove_type(index); show_edit = false;" class="flex  items-center  gap-2  ml-auto  px-4  py-2.5  rounded  bg-rose-600">
                        <IconMinus /> Remove enemy type
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
