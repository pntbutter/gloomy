<script>
export default {
    data() {
        return {
            show_edit: false,
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
        <div class="grow  flex  border  border-l-0  border-slate-700">
            <button type="button" @click="unit.elite = !unit.elite" class="grid  place-content-center  w-12  h-14  p-2  font-bold  text-2xl" :class="{ 'text-amber-300': unit.elite }">
                {{ index+1 }}
            </button>

            <div class="grid  grid-cols-3  text-rose-600">
                <button type="button" @click="unit.hp--" :disabled="unit.hp <= 0" class="grid  place-content-center  w-14  h-14  bg-slate-700  disabled:opacity-40">
                    <IconMinus />
                </button>

                <div class="grid  place-content-center  text-2xl  font-bold  text-center">
                    {{ unit.hp }}
                </div>

                <button type="button" @click="unit.hp++" :disabled="unit.hp >= get_max_hp(enemy, unit)" class="grid  place-content-center  w-14  h-14  bg-slate-700  disabled:opacity-40">
                    <IconPlus />
                </button>
            </div>
        </div>
    </div>
</template>
