<script>
export default {
    data() {
        return {
            show_edit: false,
        }
    },
    props: [
        'char',
    ]
}
</script>

<template>
    <div class="relative  grow  flex  flex-col  gap-3  p-6">
        <button type="button" @click="show_edit = true" class="flex  items-center  justify-center  gap-2  w-full">
            <h3 class="text-xl  font-bold  text-center">{{ char.name }}</h3>
            <IconEdit class="opacity-50" />
        </button>

        <div class="flex  items-center  justify-center  text-red-500">
            <button type="button" @click="char.hp--" :disabled="char.hp <= 0" class="touch-none  transition  disabled:opacity-50">
                <IconMinus />
            </button>

            <strong class="w-14  text-xl  text-center">{{ char.hp }}</strong>

            <button type="button" @click="char.hp++" :disabled="char.hp >= char.max_hp" class="touch-none  transition  disabled:opacity-50">
                <IconPlus />
            </button>
        </div>

        <div class="flex  items-center  justify-center  text-sky-500">
            <button type="button" @click="char.xp > 0 ? char.xp-- : ''" class="touch-none">
                <IconMinus />
            </button>

            <strong class="w-14  text-xl  text-center">{{ char.xp }}</strong>

            <button type="button" @click="char.xp++" class="touch-none">
                <IconPlus />
            </button>
        </div>

        <div class="pt-3">
            <div class="flex  flex-wrap  items-center  justify-center">
                <button type="button" v-for="(applies, condition) in char.conditions" @click="char.conditions[condition] = !applies" class="w-24  p-2  touch-none  transition" :class="{ 'grayscale  opacity-30': !applies }">
                    <img :src="'/conditions/' + condition + '.svg'" class="">
                </button>
            </div>
        </div>

        <div v-if="show_edit" class="absolute  inset-0  flex  flex-col  gap-3  p-6  bg-slate-700">
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
</template>
