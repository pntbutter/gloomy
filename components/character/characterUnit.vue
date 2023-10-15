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
    props: [
        'char',
    ]
}
</script>

<template>
    <div class="relative  grow  flex  flex-col  gap-2  p-4">
        <div class="flex  items-center  justify-between  gap-2  w-full">
            <h3 class="text-xl  font-bold">{{ char.name }}</h3>

            <button type="button" @click="show_edit = true">
                <IconEdit class="opacity-50" />
            </button>
        </div>

        <div class="overflow-hidden  grid  grid-cols-3  rounded  border  border-slate-700  text-rose-600">
            <button type="button" @click="char.hp--" :disabled="char.hp <= 0" class="grid  place-content-center  h-14  bg-slate-700  disabled:opacity-40">
                <IconMinus />
            </button>

            <div class="grid  place-content-center  text-2xl  font-bold  text-center">
                {{ char.hp }}
            </div>

            <button type="button" @click="char.hp++" :disabled="char.hp >= char.max_hp" class="grid  place-content-center  h-14  bg-slate-700  disabled:opacity-40">
                <IconPlus />
            </button>
        </div>

        <div class="overflow-hidden  grid  grid-cols-3  rounded  border  border-slate-700  text-sky-500">
            <button type="button" @click="char.xp > 0 ? char.xp-- : ''" :disabled="char.xp <= 0" class="grid  place-content-center  h-14  bg-slate-700  disabled:opacity-40">
                <IconMinus />
            </button>

            <div class="grid  place-content-center  text-2xl  font-bold  text-center">
                {{ char.xp }}
            </div>

            <button type="button" @click="char.xp++" class="grid  place-content-center  h-14  bg-slate-700  disabled:opacity-40">
                <IconPlus />
            </button>
        </div>

        <div>
            <header class="mt-2  p-2  bg-black/20  rounded-t  uppercase  text-xs  tracking-wide">Conditions</header>
            <div class="flex  flex-wrap  items-center  rounded-b  border  border-black/20">
                <button type="button" @click="show_edit_conditions = true" class="grid  place-content-center  w-1/3  aspect-square  xl:w-1/5">
                    <IconPlus class="w-10  h-10" />
                </button>

                <button type="button" v-for="(condition, index) in char.conditions" @click="char.conditions.splice(index, 1)" class="w-1/3  aspect-square  touch-none  transition  xl:w-1/5">
                    <img :src="'/conditions/' + condition + '.svg'" class="w-4/5  mx-auto">
                </button>
            </div>

            <div v-if="show_edit_conditions" @click="show_edit_conditions = false" class="modal-wrap">
                <div @click.stop class="modal-content">
                    <header class="flex  items-center  justify-between  pb-3">
                        <h3 class="text-xl  font-bold">Add conditions</h3>

                        <button type="button" @click="show_edit_conditions = false">
                            <IconClose />
                        </button>
                    </header>

                    <div class="flex  flex-wrap  items-center  justify-center">
                        <button type="button" v-for="condition in conditions" @click="char.conditions.push(condition); show_edit_conditions = false;" class="w-1/5  aspect-square  touch-none  transition  xl:w-[10%]" :class="{ 'grayscale  opacity-30': !char.conditions.includes(condition) }" :disabled="char.conditions.includes(condition)">
                            <img :src="'/conditions/' + condition + '.svg'" class="w-4/5  mx-auto">
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="show_edit" @click="show_edit = false" class="modal-wrap">
            <div @click.stop class="modal-content">
                <header class="flex  items-center  justify-between  pb-3">
                    <h3 class="text-xl  font-bold">Edit {{ char.name }}</h3>

                    <button type="button" @click="show_edit = false">
                        <IconClose />
                    </button>
                </header>

                <label class="grid  grid-cols-3  items-center  gap-3">
                    <span>Name:</span>
                    <input type="text" v-model="char.name" class="col-span-2  px-4  py-2  rounded  bg-slate-900">
                </label>

                <label class="grid  grid-cols-3  items-center  gap-3">
                    <span>Max HP:</span>
                    <input type="number" v-model="char.max_hp" class="col-span-2  px-4  py-2  rounded  bg-slate-900">
                </label>
            </div>
        </div>
    </div>
</template>
