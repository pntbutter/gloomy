<script>
export default {
    data() {
        return {
            show_edit: false,
            show_edit_conditions: false,
            conditions: [
                'poison',
                'wound',
                'disarm',
                'immobilize',
                'muddle',
                'strengthen',
                'stun',
                'bane',
                'brittle',
                'impare',
                'invisible',
                'regenerate',
                'ward',
            ],
        }
    },
    methods: {
        get_max_hp(enemy, unit) {
            return unit.elite ? enemy.max_hp_elite : enemy.max_hp_normal;
        },
    },
    props: [
        'enemy',
        'unit',
        'index',
    ],
}
</script>

<template>
    <div class="relative  flex  items-center  border-l-8" :class="{
        'border-l-amber-300': unit.elite,
        'border-l-white': !unit.elite,
        'opacity-40': unit.hp == 0,
    }">
        <div class="flex  w-full  border  border-l-0  border-slate-700">
            <button type="button" @click="unit.elite = !unit.elite" class="shrink-0  grid  place-content-center  w-12  h-14  p-2  font-bold  text-2xl" :class="{ 'text-amber-300': unit.elite }">
                {{ index+1 }}
            </button>

            <div class="shrink-0  grid  grid-cols-3  text-rose-600">
                <button type="button" @click="unit.hp--" :disabled="unit.hp <= 0" class="grid  place-content-center  w-14  h-14  bg-slate-700  disabled:opacity-40">
                    <IconMinus />
                </button>

                <div class="grid  place-content-center  h-14  text-2xl  font-bold  text-center">
                    {{ unit.hp }}
                </div>

                <button type="button" @click="unit.hp++" :disabled="unit.hp >= get_max_hp(enemy, unit)" class="grid  place-content-center  w-14  h-14  bg-slate-700  disabled:opacity-40">
                    <IconPlus />
                </button>
            </div>

            <div class="grow  flex  flex-wrap  items-center">
                <button type="button" @click="show_edit_conditions = true" class="shrink-0  grid  place-content-center  w-14  aspect-square">
                    <IconPlus  />
                </button>

                <button type="button" v-for="(condition, index) in unit.conditions" @click="unit.conditions.splice(index, 1)" class="shrink-0  w-14  aspect-square  touch-none  transition">
                    <img :src="'/conditions/' + condition + '.svg'" class="w-4/5  mx-auto">
                </button>

                <div v-if="show_edit_conditions" @click="show_edit_conditions = false" class="modal-wrap">
                    <div @click.stop class="modal-content">
                        <header class="flex  items-center  justify-between  pb-3">
                            <h3 class="text-xl  font-bold">Add conditions</h3>

                            <button type="button" @click="show_edit_conditions = false">
                                <IconClose />
                            </button>
                        </header>

                        <div class="flex  flex-wrap  items-center  justify-center">
                            <button type="button" v-for="condition in conditions" @click="unit.conditions.push(condition); show_edit_conditions = false;" class="w-1/5  aspect-square  touch-none  transition  xl:w-[10%]" :class="{ 'grayscale  opacity-30': !unit.conditions.includes(condition) }" :disabled="unit.conditions.includes(condition)">
                                <img :src="'/conditions/' + condition + '.svg'" class="w-4/5  mx-auto">
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
